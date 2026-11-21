import { test, expect } from '@playwright/test';
import { abrir, anotar, esperarAnimacoes } from './ajuda.mjs';

test('computador: clique expande, botão direito abre o menu, calendário com lista ao lado', async ({ page }) => {
  const erros = await abrir(page);
  await anotar(page, 'reunião de pais sexta 19h');
  await esperarAnimacoes(page);
  await page.locator('#feed .card.compact').first().click();
  await expect(page.locator('#feed .card:not(.compact)')).toHaveCount(1);
  await page.locator('#feed .card:not(.compact)').first().click({ button: 'right' });
  await expect(page.locator('#ctxmenu')).toBeVisible();
  await page.keyboard.press('Escape');
  await page.locator('#side [data-sview="cal"]').click();
  await expect(page.locator('.calrow')).toHaveCount(6);
  expect(erros).toEqual([]);
});
