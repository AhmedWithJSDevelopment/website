/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let myMainElementt = document.createElement("div");
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myHeadingehone = document.createElement("h1");
let myHeadingthree = document.createElement("h3");
let myHeadingfive = document.createElement("h5");
let myParagraph = document.createElement("p");
let mySpan = document.createElement("span");
let mynav = document.createElement("nav");
let myul = document.createElement("ul");
let myli = document.createElement("li");
let myhref = document.createElement("href");
let myimg = document.createElement("img");
let mysrc = document.createAttribute("src");

let myHeadingText = document.createTextNode("");
let myHeadingthreeText = document.createTextNode("");
let myHeadingfiveText = document.createTextNode("");
let myHeadingehoneText = document.createTextNode("");

let myParagraphText = document.createTextNode("");
let mySpanText = document.createTextNode("");
let mynavText = document.createTextNode("");
let myulText = document.createTextNode("");
let myliText = document.createTextNode("");
let myhrefText = document.createTextNode(" ");

// Add Heading Text
myHeading.appendChild(myHeadingText);
// Add Headingehpne Text
myHeadingehone.appendChild(myHeadingehoneText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Headingehone To Main Element
myMainElement.appendChild(myHeadingehone);
// Add Headingehone To Main Element
myMainElement.appendChild(myHeadingfive);

// Add myHeadingthree Text

myHeadingthree.appendChild(myHeadingthreeText);

// Add myHeadingthree To Main Element
myMainElement.appendChild(myHeadingthree);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add span Text
mySpan.appendChild(mySpanText);
// Add nav Text
mynav.appendChild(mynavText);
// Add ul Text
myul.appendChild(myulText);
// Add li Text
myli.appendChild(myliText);
// Add href Text
myhref.appendChild(myhrefText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);
// Add img To Main Element
myMainElement.appendChild(myimg);
// Add src  To Main Element
// myimg.appendChild(mysrc);

// Add nav To Main Element
myMainElement.appendChild(mynav);
// Add ul To Main Element
mynav.appendChild(myul);
// Add li To Main Element
myul.appendChild(myli);

myMainElementt.className = "productt";
myMainElement.className = "product";

document.body.appendChild(myMainElementt);
myMainElementt.appendChild(myMainElement);







let t = "product"

for (let i = 0; i < 15; i++) {

    let ele = document.createElement("div");
    ele.className = "product";
    document.body.appendChild(ele);


    let ehtwo = document.createElement("h2");
    ehtwo.textContent = "ehtwo description";
    ele.appendChild(ehtwo);
    let spann = document.createElement("span");
    spann.textContent = "span description";
    ele.appendChild(spann);

    let ehthree = document.createElement("h3");
    ehthree.textContent = "ehthree description";
    ele.appendChild(ehthree);
    let iimg = document.createElement("img");
    iimg.src = "../images/2.jpg";
    ele.appendChild(iimg);





    let par = document.createElement("p");
    par.textContent = "p description";
    ele.appendChild(par);



    let ehfive = document.createElement("h5");
    ehfive.textContent = "";
    ele.appendChild(ehfive);
    let navv = document.createElement("nav");
    navv.textContent = " ";
    ele.appendChild(navv);
    let yol = document.createElement("ul");
    yol.textContent = [];
    navv.appendChild(yol);

    let lli = document.createElement("li");
    lli.textContent = ["   SAP ERP Human Capital Management – transform the role and value of HR "];

    yol.appendChild(lli);

    let llit = document.createElement("li");
    llit.textContent = ["   SAP ERP Financials – turns finance into a strategic business partner "];

    yol.appendChild(llit);

    let llitt = document.createElement("li");
    llitt.textContent = ["   SAP ERP Operations – allows you to gain agility and speed in your operations "];


    yol.appendChild(llitt);

    let llittt = document.createElement("li");
    llittt.textContent = ["   SAP ERP Corporate Services – streamlines your business processes and costs "];


    yol.appendChild(llittt);


    let parr = document.createElement("p");
    parr.textContent = "";
    ele.appendChild(parr);
    parr.className = "parr";
    let pparr = document.createElement("p");
    pparr.textContent = "";
    ele.appendChild(pparr);
    pparr.className = "parrr";

    let br = document.createElement("br");

    document.body.appendChild(br);
    let hr = document.createElement("hr");

    document.body.appendChild(hr);






};




let ele = [];












document.querySelector('h2').style.display = "none";
document.querySelector('h1').textContent = 'Projects';
document.querySelector('h3').style.display = "none";
document.querySelector('h5').style.display = "none";
document.querySelector('p').style.display = "none";
document.querySelector('nav').style.display = "none";
document.querySelector('img:not(.logo)').style.display = "none";
document.getElementsByClassName("product")[2].querySelector('h2').textContent = 'Market place eCommerce  and  online services';
document.getElementsByClassName("product")[2].querySelector('span').textContent = 'Nov 2017 - Jun 2018';
document.getElementsByClassName("product")[2].querySelector('h3').textContent = ' Associated  with Tishknet internet services';
document.getElementsByClassName("product")[2].querySelector('p').textContent = 'A single e-comerce platform that could provide C2C, B2C and B2B services in different area for different categories.';
document.getElementsByClassName("product")[2].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[3].querySelector('h2').textContent = ' Digital wallet and electronic payment system';
document.getElementsByClassName("product")[3].querySelector('span').textContent = 'Oct 2017 - Apr 2018';
document.getElementsByClassName("product")[3].querySelector('h3').textContent = ' Associated with Tishknet internet services';
document.getElementsByClassName("product")[3].querySelector('p').textContent = 'Payment Gateway: by this service, Tishknet will going to build its own interface on the Internet where customers can browse the catalogue and select products of interest. The selected items may be collected in a shopping cart. At checkout time, the items in the shopping cart are presented as an order. At that time, more information will be needed to complete the transaction. Usually, the customer is asked to fill or select a billing address, a shipping address, a shipping option, and payment information such as credit card number. An email notification is sent to the customer as soon as the order is placed.';
document.getElementsByClassName("product")[3].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[4].querySelector('h2').textContent = ' Business Intelligent and Automation Services ';
document.getElementsByClassName("product")[4].querySelector('span').textContent = 'Jan 2017 - Oct 2017';
document.getElementsByClassName("product")[4].querySelector('h3').textContent = ' Associated with Tishknet internet services';
document.getElementsByClassName("product")[4].querySelector('p').textContent = ' Plan & Design Business Intelligent and Automation Services for Tishknet Staff to make decision accourding to daily and weekly reports.';
document.getElementsByClassName("product")[4].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[4].querySelector("ul").style.backgroundColor = "red";
document.getElementsByClassName("product")[5].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[6].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[7].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[8].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[9].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[10].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[11].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[12].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[13].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[14].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[15].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[5].querySelector('h2').textContent = ' VAS (Value Added Services) ';
document.getElementsByClassName("product")[5].querySelector('span').textContent = 'Oct 2016 - Jun 2017';
document.getElementsByClassName("product")[5].querySelector('h3').textContent = ' Associated with Tishknet internet services';
document.getElementsByClassName("product")[5].querySelector('p').textContent = 'Plan, Design & Build Cloud Services for Service Added Value (OTT, CCTV, VOIP, Games and some others confidential classified) also build the integration way with Tishknet billing systems to work together and provide the services to customers, with designing new STB suite with the services.';
document.getElementsByClassName("product")[6].querySelector('h2').textContent = ' Cloud Systems Services by OpenStack ';
document.getElementsByClassName("product")[6].querySelector('span').textContent = 'Jan 2017 - Mar 2017';
document.getElementsByClassName("product")[6].querySelector('h3').textContent = ' Associated with Tishknet internet services';
document.getElementsByClassName("product")[6].querySelector('p').textContent = ' Migrate all Services Infrastructure to work as Cloud by OpenStack as it is open source cloud and virtualisation system can suite for our infrastructure and services that gave to employees and customers.';
document.getElementsByClassName("product")[7].querySelector('h2').textContent = ' Infoblox DHCP, DNS & NTP Services';
document.getElementsByClassName("product")[7].querySelector('span').textContent = 'Oct 2016 - Nov 2016';
document.getElementsByClassName("product")[7].querySelector('h3').textContent = ' Associated with Tishknet internet services';
document.getElementsByClassName("product")[7].querySelector('p').textContent = ' Plan & Develop Infoblox DNS, DHCP, NTP, Reporting & Infoblox DNS-Sec with Threat Attack Firewall to use it by Tishknet systems and customers for better services provide.';
document.getElementsByClassName("product")[8].querySelector('h2').textContent = ' Plan & Design new Contact Center for Customer Care ';
document.getElementsByClassName("product")[8].querySelector('span').textContent = 'Jan 2016 - Aug 2016';
document.getElementsByClassName("product")[8].querySelector('h3').textContent = ' Associated with Tishknet Internet Services';
document.getElementsByClassName("product")[8].querySelector('p').textContent = ' Plan & design Cisco contact center for customer services to manage their daily base job in good and new way with multi systems integration with deferential vendors.';
document.getElementsByClassName("product")[9].querySelector('h2').textContent = '  LTE TDD (4th generation Technology) lunch in Erbil and Sulaymaniyah cities';
document.getElementsByClassName("product")[9].querySelector('span').textContent = 'Oct 2015 - Mar 2016';
document.getElementsByClassName("product")[9].querySelector('h3').textContent = ' Associated with Tishknet Internet Services';
document.getElementsByClassName("product")[9].querySelector('p').textContent = ' Build LTE TDD network in Erbil city and Swap WiMAX network in Sulaymaniyah city to the same LTE TDD to have full LTE TDD network in both cities provide internet service to the peoples in coverage area.';
document.getElementsByClassName("product")[10].querySelector('h2').textContent = '  Broadening Participation through Civil Society Program ';
document.getElementsByClassName("product")[10].querySelector('span').textContent = 'Oct 2012 - Nov 2014';
document.getElementsByClassName("product")[10].querySelector('img').src = "../images/3.jpg"
document.getElementsByClassName("product")[10].querySelector('h3').textContent = ' Associated with ACDI/VOCA';
document.getElementsByClassName("product")[10].querySelector('p').textContent = ' Iraq continues to face exceptional political and economic uncertainty despite efforts to stabilize the country and build mechanisms for democratic governance. Signs of progress and improved security are evident in many parts of the country. However, the challenges of rebuilding damaged infrastructure, restoring civil society and revitalizing the economy remain, and the danger of violent insurgency destabilizing daily life is all too real. Widening access to credit at the micro, small and medium enterprise and individual levels has the potential to stimulate Iraq’s grassroots economy and encourage entrepreneurial ventures that generate employment for economically displaced Iraqis.';
document.getElementsByClassName("product")[11].querySelector('h2').textContent = '  Dinar to Fills';
document.getElementsByClassName("product")[11].querySelector('span').textContent = 'Jan 2012 - Feb 2012';
document.getElementsByClassName("product")[11].querySelector('img').src = "../images/4.jpg"
document.getElementsByClassName("product")[11].querySelector('h3').textContent = ' Associated with Asiacell Communications PJSC';
document.getElementsByClassName("product")[11].querySelector('p').textContent = ' The billing systems was charge the customers only in Iraqi dinar now they could charge them in both dinar and fills (1000 fills equal 1 dinar) in Iraqi currency standardisation.';
document.getElementsByClassName("product")[12].querySelector('h2').textContent = '  Minutes to Seconds';
document.getElementsByClassName("product")[12].querySelector('span').textContent = 'Feb 2011 - Mar 2011';
document.getElementsByClassName("product")[12].querySelector('img').src = "https://media-exp1.licdn.com/dms/image/C4D0BAQGKUuvWeHZKxA/company-logo_100_100/0/1519857066468?e=1669248000&v=beta&t=EK1DPPt0S0FbNWnkXMvPg046pVlps7aONqLCH7IS63A"

document.getElementsByClassName("product")[12].querySelector('h3').textContent = ' Associated with Asiacell Communications PJSC';
document.getElementsByClassName("product")[12].querySelector('p').textContent = ' The billing systems was charge the customers by minutes now they charge them by seconds.';
document.getElementsByClassName("product")[13].querySelector('h2').textContent = ' Dollar to Dinar currency change';
document.getElementsByClassName("product")[13].querySelector('span').textContent = 'Mar 2010 - Apr 2010';
document.getElementsByClassName("product")[13].querySelector('img').src = "https://media-exp1.licdn.com/dms/image/C4D0BAQGKUuvWeHZKxA/company-logo_100_100/0/1519857066468?e=1669248000&v=beta&t=EK1DPPt0S0FbNWnkXMvPg046pVlps7aONqLCH7IS63A"

document.getElementsByClassName("product")[13].querySelector('h3').textContent = ' Associated with Asiacell Communications PJSC';
document.getElementsByClassName("product")[13].querySelector('p').textContent = ' The billing systems was charge the customers in us dollar, now they charge in Iraqi Dinar';
document.getElementsByClassName("product")[14].querySelector('h2').textContent = '  Balance Transfer';
document.getElementsByClassName("product")[14].querySelector('span').textContent = 'Nov 2008 - Dec 2008';
document.getElementsByClassName("product")[14].querySelector("ul").style.display = "none";
document.getElementsByClassName("product")[14].querySelector('img').src = "https://media-exp1.licdn.com/dms/image/C4D0BAQGKUuvWeHZKxA/company-logo_100_100/0/1519857066468?e=1669248000&v=beta&t=EK1DPPt0S0FbNWnkXMvPg046pVlps7aONqLCH7IS63A"

document.getElementsByClassName("product")[14].querySelector('h3').textContent = ' Associated with Asiacell Communications PJSC';
document.getElementsByClassName("product")[14].querySelector('p').textContent = ' With Asiacell Credit Transfer, any Asiacell Prepaid customer can transfer credit to another Asiacell Prepaid line by SMS.';
document.getElementsByClassName("product")[1].querySelector('h2').textContent = '  SAP For North Oil Company - Ministry of Oil - Iraq';
document.getElementsByClassName("product")[1].querySelector('span').textContent = 'Jul 2013 - Present';
document.getElementsByClassName("product")[1].querySelector('img').src = "../images/1.jpg";
document.getElementsByClassName("product")[1].querySelector('h3').textContent = ' Associated with Technology Partners FZ LLC';
document.getElementsByClassName("product")[1].querySelector('p').textContent = 'Enterprise  Resource Requirements Planning (ERP) software goes beyond core financials, human resource management and logistics. A properly integrated Enterprise Resource Planning system can improve alignment of a businesss’s  strategies and operations and enhance productivity and insight for the entire enterprise. ';
document.getElementsByClassName("product")[1].querySelector('h5').textContent = ' Technology Partners has selected market leader SAP as its Enterprise Resource Planning Solutions Partner. SAP Enterprise Resource Planning addresses the core business software requirements of the most demanding midsize and large organisations – in all industries and sectors:';


document.getElementsByClassName("product")[1].querySelector('.parr').textContent = ' Technology  Partners SAP Solutions are ideally suited to both large enterprises and growing medium sized companies in the MENA region. With over 80,000 customer organisations in 120+ countries, SAP ERP users immediately benefit from the industry best practices embedded within all SAP solutions. In addition, Technology Partners has specific SAP Industry Solutions for the Utility and Oil and Gas industries; sectors where SAP provides unrivalled industry leadership and supplies many industry-specific modules and programs. SAP Solutions can be optimised to meet the requirements of all MENA Region Utility and Oil and Gas Industry companies. ';
document.getElementsByClassName("product")[1].querySelector('br');
document.getElementsByClassName("product")[1].querySelector('.parrr').textContent = '  Technology Partners delivers unprecedented usability and data access through its SAP-integrated kiosk and mobile applications. Standard, but customizable, applications for SAP Human Capital Management, for example, provide a full suite of employee self-service applications through in-building kiosks and connected laptops, tablets and smart phones.'

document.getElementsByClassName("product")[15].style.display = "none";