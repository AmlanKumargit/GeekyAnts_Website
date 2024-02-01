// @ts-check
const { test, expect } = require('@playwright/test');
import { Home } from '../pages/home'

let home

test.beforeEach(async({page})=>{

  // const context = await browser.newContext({
  //   storageState: "./auth.json"
  // })
  // const page = await context.newPage()
   home = new Home(page);
   await home.gotoHomePage(); 
   await home.waitforHomePage();
    //verify HomePage url 
    await expect(page).toHaveURL('https://geekyants.com/'); 
   
  })

test('scroll and verify homepage elements_UI', async ({ page }) => {

  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/GeekyAnts | App Design and Development Studio Turning Ideas Into Reality | Research. Collaborate. Build. - GeekyAnts/);
    await expect(page.getByText('Build.Accelerate.Scale.Research collaborate buildDesign & Engineering studio')).toBeVisible();
    await expect(page.frameLocator('[data-test-id="chat-widget-iframe"]').locator('[data-test-id="chat-widget-launcher"]').getByLabel('Open live chat')).toBeVisible();
    await page.frameLocator('[data-test-id="chat-widget-iframe"]').locator('[data-test-id="initial-message-close-button"]').click();
    await page.frameLocator('[data-test-id="chat-widget-iframe"]').locator('[data-test-id="chat-widget-launcher"]').getByLabel('Open live chat').click();
    await expect(page.frameLocator('[data-test-id="chat-widget-iframe"]').getByLabel('Close live chat')).toBeVisible();
    await page.frameLocator('[data-test-id="chat-widget-iframe"]').getByLabel('Close live chat').click();

    //image logo
    await expect(page.locator('.hero_hero-logo__tw5rM > svg > path:nth-child(2)')).toBeVisible();
    
    //Let's Talk button
    await expect(page.getByRole('article').getByRole('list').getByRole('link', { name: 'let\'s talk' })).toBeVisible();

    //Header buttons
    await expect(page.getByRole('article').getByRole('link', { name: 'What We Do' })).toBeVisible();
    await expect(page.getByRole('article').getByRole('link', { name: 'Case Studies' })).toBeVisible();
    await expect(page.getByRole('article').getByRole('link', { name: 'Technologies' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About us', exact: true })).toBeVisible();
    await expect(page.getByRole('article').getByRole('link', { name: 'Insights', exact: true })).toBeVisible();

    //Certified partners
    await expect(page.getByRole('heading', { name: 'We Deliver Extraordinary' })).toBeVisible();
    await expect(page.getByText('We Deliver Extraordinary Digital Experiences.Using AI for now and futureDesign')).toBeVisible();

    await expect(page.getByText('Using AI for now and future')).toBeVisible();
    await expect(page.getByText('Design experience that leaves')).toBeVisible();
    await expect(page.getByText('Architecture that scales to')).toBeVisible();
    await expect(page.getByText('Standarized approach for')).toBeVisible();

    await expect(page.locator('div').filter({ hasText: /^Certified Partners$/ }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Certified Partners' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Vercel' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'AWS Partner' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'GitHub' })).toBeVisible();
   
    //Trusted by
    await expect(page.locator('#trusted div').filter({ hasText: 'Trusted ByLeading companies' }).first()).toBeVisible();
    
    await page.getByRole('img', { name: 'Logistics app development for' }).click();
    await expect(page.getByText('Taking logistics to the next')).toBeVisible();
    await page.getByRole('img', { name: 'Mobile and web app development for Pepperfry' }).click();
    await expect(page.getByText('Pepperfry is an online')).toBeVisible();
    await page.getByRole('img', { name: 'Mobile and web app development for AtSign' }).click();
    await expect(page.getByText('AtSign is the creator of the')).toBeVisible();
    await page.getByRole('img', { name: 'Mobile and web app development for 100ms' }).click();
    await expect(page.getByText('Founded in 2020, 100ms is')).toBeVisible();
    await page.getByRole('img', { name: 'Mobile and web platfrom' }).click();
    await expect(page.getByText('Scroll News is an independent')).toBeVisible();
    await page.getByRole('img', { name: 'Mobile and web app development for Amana skincare' }).click();
    await expect(page.getByText('UK based Amana skincare is')).toBeVisible();
    await page.getByRole('img', { name: 'Mobile and web app development for Darden' }).click();
    await expect(page.getByText('Darden is the world\'s largest')).toBeVisible();
    await page.getByAltText('Mobile and web app development for ICICI').nth(1).click();
    await expect(page.getByText('ICICI Securities is a')).toBeVisible();
    await page.getByRole('img', { name: 'Redesign gaming app for' }).click();
    await expect(page.getByText('A long term client with over')).toBeVisible();
    await page.getByRole('img', { name: 'Mobile and web app development for IPS Verlang' }).click();
    await expect(page.getByText('IPS Verlag is part of the IPS')).toBeVisible();
    await page.getByRole('img', { name: 'Mobile and web app development for KhataBook' }).click();
    await expect(page.getByText('Khatabook is an Indian')).toBeVisible();

    //next, previous buttons
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText('Taking logistics to the next')).toBeVisible();
    
    await page.getByRole('button', { name: 'Previous' }).click();
    await expect(page.getByText('Khatabook is an Indian')).toBeVisible();

   
    //WhatWeDoBest
    await expect(page.locator('#what-we-do')).toBeVisible();

    await expect(page.getByRole('heading', { name: 'What We Do Best' })).toBeVisible();
    await expect(page.getByText('500+ projects deep and still')).toBeVisible();

    await expect(page.getByText('Web App DevelopmentTransform')).toBeVisible();
    await expect(page.getByText('Mobile App DevelopmentWith')).toBeVisible();
    await expect(page.getByText('UX/UI DesignUnique designs')).toBeVisible();
    await expect(page.getByText('Full-stack DevelopmentOur')).toBeVisible();
    await expect(page.getByText('Quality AssuranceNo')).toBeVisible();
    await expect(page.getByText('Business AnalysisWe discover')).toBeVisible();

    //Technologies
    await expect(page.locator('#technologies')).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Technologies' })).toBeVisible();
    await expect(page.getByText('We work with cutting-edge')).toBeVisible();

    await expect(page.locator('#technologies').getByRole('link', { name: 'React Native' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'React Native', exact: true })).toBeVisible();
    await expect(page.locator('#technologies').getByRole('link', { name: 'Next.js' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Next.js' })).toBeVisible();
    await expect(page.locator('#technologies').getByRole('link', { name: 'Flutter' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Flutter', exact: true })).toBeVisible();
    await expect(page.locator('#technologies').getByRole('link', { name: 'GraphQL' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'GraphQL' })).toBeVisible();
    await expect(page.locator('#technologies').getByRole('link', { name: 'Node.js' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Node.js' })).toBeVisible();
    await expect(page.locator('#technologies').getByRole('link', { name: 'PostgreSQL' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'PostgreSQL' })).toBeVisible();
    await expect(page.locator('#technologies').getByRole('link', { name: 'DevOps' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'DevOps' })).toBeVisible();

    //OpenSource   
    await expect(page.getByRole('article').locator('#open-source')).toBeVisible(); 

         //await expect().toBeVisible();
    //Customizable Solutions
    //OutTeam&Culture
    //Insights
    //Client Stories
    //Footer

});

test.afterEach(async({page})=>{
  await page.close();
})  


