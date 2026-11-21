import { test, expect } from '@playwright/test';
import { abrir, anotar, esperarAnimacoes, segurar } from './ajuda.mjs';

const abertos = page => page.locator('#feed .card:not(.compact)');

test('anotar e tocar no card para expandir e recolher', async ({ page }) => {
  const erros = await abrir(page);
  await anotar(page, 'Ideia para a aula de cartografia', false);
  await esperarAnimacoes(page);
  await page.locator('#feed .card.compact').first().tap();
  await expect(abertos(page)).toHaveCount(1);
  await page.locator('#feed .card:not(.compact) .chead').first().tap();
  await expect(abertos(page)).toHaveCount(0);
  expect(erros).toEqual([]);
});

test('despesa: detecção, pagar e carimbo', async ({ page }) => {
  const erros = await abrir(page);
  await page.fill('#msg', 'pagar 180 ao Seu Zé dia 25');
  await expect(page.locator('#suggest')).toContainText('Despesa');
  await page.click('[data-sug="ok"]');
  await esperarAnimacoes(page);
  await page.locator('#feed .card.compact .qbtn').first().tap();
  await page.locator('#feed .card.compact').first().tap();
  await expect(page.locator('#feed .card:not(.compact)')).toContainText(/Pago|PAGO/);
  expect(erros).toEqual([]);
});

test('tocar numa informação abre o editor naquele campo', async ({ page }) => {
  const erros = await abrir(page);
  await anotar(page, 'pagar luz 120 dia 28');
  await esperarAnimacoes(page);
  await page.locator('#feed .card.compact').first().tap();
  await page.locator('#feed .card:not(.compact) [data-f="valor"]').tap();
  await expect(page.locator('.sheet')).toBeVisible();
  await expect(page.locator('.sheet [data-k="valor"]')).toBeFocused();
  expect(erros).toEqual([]);
});

test('segurar o card abre o menu e fixa', async ({ page }) => {
  const erros = await abrir(page);
  await anotar(page, 'reunião de pais sexta 19h');
  await esperarAnimacoes(page);
  await segurar(page, page.locator('#feed .card.compact .cexp').first());
  await expect(page.locator('#ctxmenu')).toBeVisible();
  await page.locator('#ctxmenu [data-ctx="pin"]').tap();
  await expect(page.locator('#pinbar')).toBeVisible();
  expect(erros).toEqual([]);
});

test('cronograma escrito em linhas', async ({ page }) => {
  const erros = await abrir(page);
  await page.fill('#msg', 'Aula de campo sexta\n7h saída da escola\n9h30 chegada ao açude\n12h almoço\n15h retorno');
  await expect(page.locator('#suggest')).toContainText('Cronograma');
  await page.click('[data-sug="ok"]');
  await esperarAnimacoes(page);
  await expect(page.locator('#feed .card.compact').first()).toContainText('4 etapas');
  await page.locator('#feed .card.compact').first().tap();
  await expect(page.locator('#feed .crono .et')).toHaveCount(4);
  expect(erros).toEqual([]);
});

test('calendário: relógio, dia, semana e card que expande', async ({ page }) => {
  const erros = await abrir(page);
  await anotar(page, 'reunião de pais hoje 20h');
  await page.locator('#tabCal').tap();
  await expect(page.locator('#calgrid')).toBeVisible();
  await expect(page.locator('#relogio')).toBeVisible();
  const hoje = await page.evaluate(() => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); });
  await page.locator(`[data-cald="${hoje}"]`).tap();
  await expect(page.locator('.calrow')).toHaveCount(1);
  await page.locator('.calday .card.compact').first().tap();
  await expect(page.locator('.calday .card:not(.compact)')).toHaveCount(1);
  await page.locator('[data-calsem="0"]').tap();
  await expect(page.locator('.calrow')).toHaveCount(6);
  expect(erros).toEqual([]);
});

test('busca sem acento e filtro', async ({ page }) => {
  const erros = await abrir(page);
  await anotar(page, 'Visita ao açude amanhã 8h');
  await anotar(page, 'Comprar giz', false);
  await page.locator('#bSearch').tap();
  await page.fill('#q', 'acude');
  await expect(page.locator('#feed .card')).toHaveCount(1);
  await page.locator('#bFilter').tap();
  await expect(page.locator('.sheet')).toBeVisible();
  expect(erros).toEqual([]);
});

const PNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAEklEQVR4nGP4z8CAFWEXHbQSACj/P8Fu7N9hAAAAAElFTkSuQmCC', 'base64');
const PDF = Buffer.from('%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj\n2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj\n3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 300 400]>>endobj\ntrailer<</Root 1 0 R>>\n%%EOF');

test('imagem em tela cheia com zoom', async ({ page }) => {
  const erros = await abrir(page);
  await page.setInputFiles('#fAttach', { name: 'foto.png', mimeType: 'image/png', buffer: PNG });
  await esperarAnimacoes(page);
  await page.locator('#feed .card.compact').first().tap();
  await page.locator('#feed [data-view]').first().tap();
  await expect(page.locator('#vimg')).toBeVisible();
  await page.locator('[data-vz="1"]').tap();
  await expect(page.locator('.viewer.zoomed')).toHaveCount(1);
  await page.locator('[data-vclose]').tap();
  expect(erros).toEqual([]);
});

test('PDF abre dentro do app', async ({ page }) => {
  const erros = await abrir(page);
  await page.setInputFiles('#fAttach', { name: 'prova.pdf', mimeType: 'application/pdf', buffer: PDF });
  await esperarAnimacoes(page);
  await page.locator('#feed .card.compact').first().tap();
  await page.locator('[data-pdf]').tap();
  await expect(page.locator('#pdfpg')).toContainText('Página 1 de 1', { timeout: 15000 });
  expect(erros).toEqual([]);
});

test('abas cabem e alternam', async ({ page }) => {
  const erros = await abrir(page);
  for (const id of ['tabCal', 'tabResumo', 'tabNotas']) {
    await page.locator('#' + id).tap();
    await expect(page.locator('#' + id)).toHaveAttribute('aria-pressed', 'true');
  }
  const sobra = await page.evaluate(() => [...document.querySelectorAll('.navseg .tl')].some(t => t.offsetParent && t.scrollWidth > t.clientWidth + 1));
  expect(sobra).toBe(false);
  expect(erros).toEqual([]);
});
