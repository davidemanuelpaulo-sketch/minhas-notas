// Ajusta o projeto Android gerado pelo Capacitor:
// permissões, receber do menu Compartilhar, ícones e número de versão.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifestPath = path.join(root, 'android/app/src/main/AndroidManifest.xml');
let m = fs.readFileSync(manifestPath, 'utf8');

const perms = [
  'android.permission.RECORD_AUDIO',
  'android.permission.MODIFY_AUDIO_SETTINGS',
  'android.permission.POST_NOTIFICATIONS',
  'android.permission.SCHEDULE_EXACT_ALARM',
  'android.permission.RECEIVE_BOOT_COMPLETED'
];
for (const p of perms) {
  if (!m.includes(`"${p}"`)) m = m.replace('</manifest>', `    <uses-permission android:name="${p}" />\n</manifest>`);
}

const filters = `
            <!-- Receber conteúdo pelo menu Compartilhar -->
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="text/*" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEND" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="image/*" />
                <data android:mimeType="audio/*" />
                <data android:mimeType="application/*" />
            </intent-filter>
            <intent-filter>
                <action android:name="android.intent.action.SEND_MULTIPLE" />
                <category android:name="android.intent.category.DEFAULT" />
                <data android:mimeType="image/*" />
            </intent-filter>
`;
if (!m.includes('android.intent.action.SEND"')) {
  const i = m.indexOf('</activity>');
  if (i < 0) throw new Error('MainActivity não encontrada no AndroidManifest.xml');
  m = m.slice(0, i) + filters + '        ' + m.slice(i);
}
fs.writeFileSync(manifestPath, m);

// ícones
const src = path.join(root, 'resources/android/res');
const dst = path.join(root, 'android/app/src/main/res');
function copyDir(a, b) {
  for (const e of fs.readdirSync(a, { withFileTypes: true })) {
    const pa = path.join(a, e.name), pb = path.join(b, e.name);
    if (e.isDirectory()) { fs.mkdirSync(pb, { recursive: true }); copyDir(pa, pb); }
    else fs.copyFileSync(pa, pb);
  }
}
copyDir(src, dst);


// tela de abertura na cor do app (clara ou escura) com o ícone
const stylesPath = path.join(root, 'android/app/src/main/res/values/styles.xml');
let st = fs.readFileSync(stylesPath, 'utf8');
st = st.replace(/<style name="AppTheme\.NoActionBarLaunch"[\s\S]*?<\/style>/,
  `<style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">
        <item name="windowSplashScreenBackground">@color/splash_bg</item>
        <item name="windowSplashScreenAnimatedIcon">@mipmap/ic_launcher_foreground</item>
        <item name="postSplashScreenTheme">@style/AppTheme.NoActionBar</item>
    </style>`);
fs.writeFileSync(stylesPath, st);

// ícone temático (Android 13+): camada monocromática
for (const f of ['ic_launcher.xml', 'ic_launcher_round.xml']) {
  const p2 = path.join(root, 'android/app/src/main/res/mipmap-anydpi-v26', f);
  if (!fs.existsSync(p2)) continue;
  let x = fs.readFileSync(p2, 'utf8');
  if (!x.includes('<monochrome')) x = x.replace('</adaptive-icon>', '    <monochrome android:drawable="@mipmap/ic_launcher_monochrome"/>\n</adaptive-icon>');
  fs.writeFileSync(p2, x);
}

// versão: usa o número da execução do GitHub Actions
const gradlePath = path.join(root, 'android/app/build.gradle');
let g = fs.readFileSync(gradlePath, 'utf8');
const run = parseInt(process.env.GITHUB_RUN_NUMBER || '1', 10);
g = g.replace(/versionCode\s+\d+/, `versionCode ${run}`).replace(/versionName\s+"[^"]*"/, `versionName "2.0.${run}"`);
fs.writeFileSync(gradlePath, g);
console.log('Android ajustado. Versão 2.0.' + run);
