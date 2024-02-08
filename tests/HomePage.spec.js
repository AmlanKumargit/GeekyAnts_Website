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
  test('HomePage_Header Elements', async ({ page }) => {


    const ele = page.getByRole('heading', { name: 'Our Team' });
    ele.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    
    //Header_WhatweDo left tab elements(onHover)
    await page.getByRole('navigation').getByRole('link', { name: 'What We Do' }).hover();
    await expect(page.locator('li').filter({ hasText: /^Services$/ })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: /^Industries$/ })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: /^Customizable Solutions$/ })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: /^R&D$/ })).toBeVisible();
    await expect(page.locator('li').filter({ hasText: /^Open-Source$/ })).toBeVisible();
    
    //WhatweDo_Services tab elements(onHover)
    await page.getByRole('link', { name: 'Services', exact: true }).hover();
    await expect(page.locator('#service li').filter({ hasText: 'Web App DevelopmentEnd-to-end' })).toBeVisible();
    await expect(page.locator('#service li').filter({ hasText: 'Mobile App DevelopmentRobust' })).toBeVisible();
    await expect(page.locator('#service li').filter({ hasText: 'Quality Assurance & Software' })).toBeVisible();
    await expect(page.locator('#service li').filter({ hasText: 'UI/UX DesignUnique user' })).toBeVisible();
    await expect(page.locator('#service li').filter({ hasText: 'Business AnalysisDiscover' })).toBeVisible();
    await expect(page.locator('#service li').filter({ hasText: 'Full-stack DevelopmentRobust' })).toBeVisible();
    await expect(page.getByText('See All Services')).toBeVisible();

    //WhatweDo_Industries tab elements(onHover)
    await page.getByRole('link', { name: 'Industries' }).hover();
    await expect(page.locator('#solution li').filter({ hasText: 'ManufacturingInnovative apps' })).toBeVisible();
    await expect(page.locator('#solution li').filter({ hasText: 'FintechSafe and customized' })).toBeVisible();
    await expect(page.locator('#solution li').filter({ hasText: 'HealthcareRobust healthcare' })).toBeVisible();
    await expect(page.locator('#solution li').filter({ hasText: 'E-commerceHigh-performing,' })).toBeVisible();
    await expect(page.locator('#solution li').filter({ hasText: 'EducationApplications with' })).toBeVisible();
    await expect(page.locator('#solution li').filter({ hasText: 'Travel & HospitalityUser-' })).toBeVisible();
    await expect(page.getByText('See All Industries')).toBeVisible();

     //WhatweDo_CustomizableSoutions tab elements(onHover)
     await page.getByRole('link', { name: 'Customizable Solutions' }).hover();
     await expect(page.locator('#app li').filter({ hasText: 'E‑commerce Web AppA' })).toBeVisible();
     await expect(page.locator('#app li').filter({ hasText: 'Twitter Spaces CloneA' })).toBeVisible();
     await expect(page.locator('#app li').filter({ hasText: 'Chat and Messaging AppA' })).toBeVisible();
     await expect(page.locator('#app li').filter({ hasText: 'Telemedicine AppA solution' })).toBeVisible();
     await expect(page.locator('#app li').filter({ hasText: 'Food and Grocery Delivery' })).toBeVisible();
     await expect(page.locator('#app li').filter({ hasText: 'Bike Taxi Booking AppA' })).toBeVisible();
     await expect(page.getByText('See All Customizable Solutions')).toBeVisible();

     //WhatweDo_RnD tab elements(onHover)
     await page.getByRole('link', { name: 'R&D' }).hover();
     await expect(page.locator('#research').getByRole('listitem')).toBeVisible();

     //WhatweDo_Open-Source tab elements(onHover)
     await page.getByRole('link', { name: 'Open-Source', exact: true }).hover();
     await expect(page.locator('#open-source li').filter({ hasText: 'gluestack-uiReact & React' })).toBeVisible();
     await expect(page.locator('#open-source li').filter({ hasText: 'gluestack-ui-flutter [' })).toBeVisible();
     await expect(page.locator('#open-source li').filter({ hasText: 'NativeBaseOpen-source UI' })).toBeVisible();
     await expect(page.getByText('See All Products')).toBeVisible();

     //Header_Technology tab elements(onHover)
    await page.getByRole('navigation').getByRole('link', { name: 'Technologies' }).hover();
    await expect(page.getByRole('navigation').getByText('React NativeNext.')).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: 'Next.js' })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: 'Flutter' })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: 'GraphQL' })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: 'Node.js' })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: 'PostgreSQL' })).toBeVisible();
    await expect(page.getByRole('navigation').getByRole('link', { name: 'DevOps' })).toBeVisible();

    //Header_AboutUs tab elements(onHover)
    await page.getByRole('link', { name: 'About Us', exact: true }).hover();
    await expect(page.locator('li').filter({ hasText: 'About usDiscover how we' }).nth(1)).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'TeamMeet the geeks behind the' }).nth(1)).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'LeadersDive into the' }).nth(1)).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'Join usDiscover how we embody' }).nth(1)).toBeVisible();
    await expect(page.locator('li').filter({ hasText: 'CultureTake a sneak peek of' }).nth(1)).toBeVisible();

     //Header_Insights tab elements(onHover)
     await page.getByRole('navigation').getByRole('link', { name: 'Insights', exact: true }).hover();
     await expect(page.locator('li').filter({ hasText: 'BlogIndustry trends decoded' }).nth(1)).toBeVisible();
     await expect(page.locator('li').filter({ hasText: 'GuidesPlaybooks to achieve' }).nth(1)).toBeVisible();

     //Let's Talk and Language/locale elements
     await expect(page.getByRole('navigation').getByRole('link', { name: 'let\'s talk' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'Globe' })).toBeVisible();
     await page.getByRole('link', { name: 'Globe' }).hover();
     await expect(page.locator('div').filter({ hasText: /^Global$/ })).toBeVisible();
     await expect(page.locator('div').filter({ hasText: /^UK$/ })).toBeVisible();
     
   })


test('HomePage_Scroll and Verify UI', async ({ page }) => {

  
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

    await expect(page.getByRole('heading', { name: 'Open Source' })).toBeVisible();
    await expect(page.getByText('Open-source advocates,')).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Open-Source Contributions' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'gluestack-ui gluestack-ui' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'NativeBase NativeBase An open' })).toBeVisible();

    //Customizable Solutions
    await expect(page.locator('[id="__next"] div').filter({ hasText: 'Customisable SolutionsNavigate through various solutions and clones of popular' }).nth(2)).toBeVisible(); 

    await expect(page.getByRole('heading', { name: 'Customisable Solutions' })).toBeVisible();
    await expect(page.getByText('Navigate through various')).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Showcase Applications' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Supply Chain Management App' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Telemedicine App Telemedicine' })).toBeVisible();

    //OutTeam&Culture
    const ele = page.getByRole('heading', { name: 'Our Team' });
    ele.scrollIntoViewIfNeeded();

     await expect(page.getByRole('heading', { name: 'Our Team' })).toBeVisible();
     await expect(page.getByText('We are a family of innovative')).toBeVisible();
     await expect(page.getByRole('link', { name: 'Meet the Team' })).toBeVisible();

     await expect(page.getByRole('heading', { name: 'Our Culture' })).toBeVisible();
     await expect(page.getByText('We believe in being early')).toBeVisible();
     await expect(page.getByRole('link', { name: 'Our Cultural Insights' })).toBeVisible();
       
    //Insights
    await expect(page.locator('#blog')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Insights' })).toBeVisible();
    await expect(page.getByText('Discover the inner workings')).toBeVisible();
    await expect(page.getByRole('link', { name: 'More Blogs' })).toBeVisible();

    await expect(page.locator('[id="blog"] div div>div:nth-child(3)').first()).toBeVisible();


    //Client Stories
    await expect(page.locator('[id="__next"] div').filter({ hasText: 'Client StoriesListen to what' }).nth(2)).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Client Stories' })).toBeVisible();
    await expect(page.getByText('Listen to what our clients')).toBeVisible();
    await expect(page.getByRole('img', { name: 'Client Video' })).toBeVisible();
   
    //Footer1
    await expect(page.locator('#footer')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Let’s Build Your Product' })).toBeVisible();
    await expect(page.getByText('Get a free discovery session')).toBeVisible();
    await expect(page.locator('#footer').getByRole('link', { name: 'let\'s talk' })).toBeVisible();

   //Footer2
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer').getByRole('img', { name: 'GeekyAnts', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'ISO' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'GMS' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'AIAO_BAR' })).toBeVisible();

    await expect(page.getByText('connect')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Instagram GeekyAnts' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Facebook GeekyAnts' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Twitter GeekyAnts' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'LinkedIn GeekyAnts' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'YouTube GeekyAnts' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Discord GeekyAnts' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Medium GeekyAnts' })).toBeVisible();

    await expect(page.getByText('Quick Links')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Hire us' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Join us' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Events & conferences' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Developer Environment Security' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Partner Program' })).toBeVisible();
    await expect( page.getByRole('link', { name: 'Financial Reports' })).toBeVisible();

    await expect(page.getByText('hire developer')).toBeVisible();
    await expect(page.locator('footer').getByRole('link', { name: 'React Native' })).toBeVisible();
    await expect(page.locator('footer').getByRole('link', { name: 'Next.js' })).toBeVisible();
    await expect(page.locator('footer').getByRole('link', { name: 'Flutter' })).toBeVisible();
    await expect(page.locator('a').filter({ hasText: 'GraphQL' })).toBeVisible();
    await expect(page.locator('footer').getByRole('link', { name: 'Node.js' })).toBeVisible();
    await expect(page.locator('footer').getByRole('link', { name: 'PostgreSQL' })).toBeVisible();
    await expect(page.locator('a').filter({ hasText: 'DevOps' })).toBeVisible();
    
    await expect(page.getByText('engagement model')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Fixed Scope' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Dedicated Team' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Agile Product' })).toBeVisible();

    await expect(page.getByRole('img', { name: 'WorkWith' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'Clutch' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'AppFutura' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'GoodFirms' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'DesignRush' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'TopDevelopers' })).toBeVisible();

    await expect(page.getByText('GeekyAnts India Pvt LtdNo. 18, 2nd Cross Road, N S Palya, 2nd StageBTM Layout, Bangalore - 560076, Karnataka, India +91 9595884422GeekyAnts UK LtdSPACES Finsbury Park, 17 City North Place, London N4 3FU, England, UK+44 (0)2080146956GeekyAnts Inc315 Montgomery Street, 9th & 10th floors,San Francisco, CA, 94104, USA+1 (415)')).toBeVisible();
    
});

test.afterEach(async({page})=>{
  await page.close();
})  


