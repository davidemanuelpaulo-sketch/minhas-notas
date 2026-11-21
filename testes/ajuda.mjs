import { expect } from '@playwright/test';
export async function abrir(page) {
  const erros = [];
  page.on('pageerror', e => erros.push(String(e)));
  await page.goto('/testes/index.html');
  await expect(page.locator('#msg')).toBeVisible();
  return erros;
}
export async function anotar(page, texto, aceitarSugestao = true) {
  await page.fill('#msg', texto);
  const ok = page.locator('[data-sug="ok"]');
  if (aceitarSugestao && await ok.isVisible().catch(() => false)) await ok.click(); else await page.click('#bSend');
  await page.waitForTimeout(250);
}
export async function esperarAnimacoes(page) { await page.waitForTimeout(1700); }
export async function segurar(page, locator) {
  const box = await locator.boundingBox();
  const x = box.x + box.width / 2, y = box.y + box.height / 2;
  await locator.evaluate((el, [x, y]) => { const o = { bubbles: true, pointerType: 'touch', clientX: x, clientY: y, isPrimary: true, pointerId: 7 }; el.dispatchEvent(new PointerEvent('pointerdown', o)); window.__lpo = o; }, [x, y]);
  await page.waitForTimeout(650);
  await locator.evaluate(el => el.dispatchEvent(new PointerEvent('pointerup', window.__lpo)));
}
