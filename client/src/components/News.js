import React, { useState, useEffect } from 'react';
import { Accordion, Container, Card, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import Axios from 'axios';

const News = () => {

    const apiKey = "pub_689087b424d64e72ba68d8e09ae9d5cc7604";
    const [newsList, setNewsList] = useState([]);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);



    const n = [
        {
            "title": "EU entra a fase endémica de COVID, asegura Fauci",
            "link": "https://www.elfinanciero.com.mx/mundo/2022/04/27/estados-unidos-entra-a-fase-endemica-de-covid-fauci/",
            "keywords": null,
            "creator": [
                "AP"
            ],
            "video_url": null,
            "description": "El promedio de casos diarios en Estados Unidos es mucho menor al que era en meses recientes, aseguró Anthony Fauci.",
            "content": "Estados Unidos ya ha salido de la fase pandémica del coronavirus en cuanto a contagios, hospitalizaciones y decesos y parece estar entrando en una fase donde la enfermedad es endémica, es decir, que surge periódicamente en ciertas regiones, declaró el máximo experto en enfermedades contagiosas del país.En declaraciones el martes en el programa “NewsHour” del canal PBS, el doctor Anthony Fauci enfatizó que la amenaza no ha concluido y que él se refería solamente a la peor fase de la pandemia.“Lo que quiero decir es que no estamos teniendo 900 mil infecciones nuevas cada día y miles de hospitalizaciones y muertes. Estamos actualmente a niveles bajos”, indicó Fauci.Posteriormente, en declaraciones al Washington Post, Fauci intentó aclarar sus comentarios anteriores, enfatizando que a diferencia de “la etapa explosiva y total de la pandemia” suscitada por la contagiosa variante ómicron, se refería a lo que parece ser un periodo de transición hacia una etapa endémica.“El mundo sigue en pandemia, de eso no cabe duda. Que nadie malinterprete eso. Seguimos experimentando una pandemia”, dijo Fauci al Post.Los comentarios surgen en momentos en que las autoridades debaten cómo mantener bajos los casos y las hospitalizaciones y cómo aprender a vivir con un virus que sigue siendo impredecible y capaz de mutar.El gobierno estadounidense insiste en que el país hoy en día tiene muchas más herramientas que antes para lidiar con la enfermedad, como por ejemplo las vacunas, los refuerzos y los medicamentos.El promedio de casos diarios en Estados Unidos es mucho menor al que era en meses recientes. Aun así, las autoridades sanitarias siguen atentas al virus debido a que siguen surgiendo nuevas variantes. Los Centros para el Control y la Prevención de Enfermedades (CDC, por sus siglas en inglés) dicen que los casos aumentaron 25 por ciento la última semana.",
            "pubDate": "2022-04-27 19:03:38",
            "image_url": null,
            "source_id": "elfinanciero",
            "country": [
                "mexico"
            ],
            "category": [
                "top"
            ],
            "language": "spanish"
        },
        {
            "title": "Hepatitis infantil aguda: ascienden a 190 los casos sin causa aún conocida",
            "link": "https://www.lavoz.com.ar/ciudadanos/hepatitis-infantil-aguda-ascienden-a-190-los-casos-sin-causa-aun-conocida/",
            "keywords": null,
            "creator": [
                "Agencia EFE y Redacción La Voz"
            ],
            "video_url": null,
            "description": null,
            "content": "Los casos de hepatitis infantil aguda de origen desconocido, surgida en Reino Unido y confirmada ya en una docena de países, ascienden a 190, informó este martes el Centro Europeo para la Prevención y el Control de Enfermedades (ECDC).“Hay investigaciones en marcha en todos los países que han confirmado casos, pero por el momento la causa de esta hepatitis todavía es desconocida”, dijo en rueda de prensa la directora de este organismo de referencia para infecciones de la Unión Europea (UE), Andrea Ammon.Más noticias de la sección SaludEn Reino Unido, donde se dio la alerta el pasado día 5, se han detectado más de un centenar de casos y cuarenta corresponden a diez países de la Unión Europea (UE) y del Espacio Económico Europeo (EEE), entre ellos España, a los que hay que sumar los registrados en Estados Unidos e Israel.Las pesquisas de estos casos, que han provocado una muerte y cerca de una veintena de trasplantes de hígado, apuntan a un “vínculo” con una infección causada por un adenovirus, mientras se han excluido hepatitis viral de los tipos A, B, C, D y E.Qué dijo la OMSLa Organización Mundial de la Salud (OMS) había mostrado hace tres días su inquietud por el hecho de que un adenovirus, normalmente asociado a dolencias respiratorias leves, pueda estar causando inflamaciones hepáticas agudas.“Es difícil hacer una evaluación de riesgo con tantos factores desconocidos, pero el impacto es alto”, alertó Ammon.El ECDC, que difundirá un nuevo análisis sobre la enfermedad este jueves, señaló que seguirá monitorizando los casos y colaborando con las autoridades sanitarias de los respectivos países.“Hasta el momento no se ha detectado ninguna conexión entre los casos ni ninguna asociación con viajes”, afirmó Ammon sobre una enfermedad entre cuyos síntomas figuran dolores abdominales, diarrea o vómitos.En su comparecencia, que coincide con la semana de la inmunización en Europa, Ammon informó también de las últimas novedades sobre la pandemia de coronavirus en el continente, caracterizada por una reducción del contagio y de la mortalidad, mientas la vacunación no avanza de forma sensible.Alerta sobre el estancamiento de la vacunaciónLa transmisión de coronavirus se redujo un 20 % la pasada semana respecto a la anterior -aunque en España y Francia ha subido en los mayores de 65 años-, mientras la tasa de mortalidad cayó un 80 % y los ingresos en UCI se han estabilizado al nivel de noviembre del año pasado, antes del brote de ómicron, destacó el ECDC.“Tenemos una transmisión en descenso, pero la situación es muy variada dentro de la UE, como ha sido durante toda la pandemia. A pesar de la caída, la pandemia no ha terminado, el virus sigue ahí”, dijo la directora del ECDC, Andrea Ammon.El 73 % de la población de la UE ha recibido la pauta completa de la vacuna y el 64 % de los mayores de 18 años, la dosis de refuerzo, aunque esas cifras se han estancado en las últimas semanas.“Existe cansancio por la pandemia y la vacunación, por eso las autoridades deben estudiar cómo reforzar los programas de vacunación”, afirmó Ammon, que los considera un “componente clave” para reducir el impacto de la covid-19 y evitar la aparición de nuevas mutaciones.Las tasas de vacunación varían también de forma considerable entre países y entre grupos de edades.Así, en algunos países europeos, solo la mitad de la población ha comenzado el programa de vacunación.El porcentaje de menores de 18 años que han completado la pauta es del 23 % y más del 60 % de los que tienen entre 10 y 14 no se ha vacunado, porcentaje que es aún mayor en los que tienen entre 5 y 9, reveló la directora de vacunas, enfermedades prevenibles e inmunización del ECDC, Lucia Pastore-Celentano.“Es muy importante resaltar que aunque la probabilidad de sufrir covid-19 severo o muerte en niños y adolescentes es más baja, el riesgo existe aún así. Además, los casos de jóvenes contribuyen a aumentar la carga viral en toda la población y pueden transmitir el virus a grupos vulnerables”, advirtió.De ahí que considere esencial alcanzar y mantener índices de vacunación altos “en todos los grupos de edad”.El ECDC reiteró además su recomendación de que los grupos vulnerables reciban una cuarta dosis de la vacuna. Qué dijo la Sociedad Argentina de Pediatría La entidad emitió un comunicado por la enfermedad que ya causó una muerte en Europa. Acá no hubo casos, pero pidió que los médicos estén alerta.La Sociedad Argentina de Pediatría (SAP) emitió una alerta este miércoles por el brote de hepatitis aguda grave de origen desconocido en niños que se registra en Europa, Estados Unidos e Israel, entre otros países.“Si bien no se ha observado en el país ni en la región un aumento de casos de hepatitis aguda en relación a otros años, debemos sensibilizar la sospecha de hepatitis ante la aparición de casos compatibles según definiciones y realizar la notificación a través del Sistema Nacional de Vigilancia de la Salud (SNVS) o a su referente epidemiológico”, pidió la SAP.El documento de la SAP fue difundido luego de que circulara la versión de que ya se había detectado el primer caso sospechoso del país, en el Hospital Gutiérrez.",
            "pubDate": "2022-04-27 18:55:49",
            "image_url": "https://www.lavoz.com.ar/resizer/9nG7Dni97HU1_BG-FRgtJKXaqhw=/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/Q64ANSRVVZF6ZJK6JELZNXPTTU.jpg",
            "source_id": "lavoz",
            "country": [
                "argentina"
            ],
            "category": [
                "top"
            ],
            "language": "spanish"
        },
        {
            "title": "US is ‘out of the pandemic phase’ of Covid",
            "link": "https://metro.co.uk/2022/04/27/covid-us-is-out-of-the-pandemic-phase-16546518/",
            "keywords": [
                "US",
                "Coronavirus",
                "Health",
                "US news"
            ],
            "creator": [
                "Jessica Kwong"
            ],
            "video_url": null,
            "description": "But Dr Anthony Fauci warned 'we’re not going to eradicate this virus'",
            "content": "Dr Anthony Fauci (right) declared that the US is ‘out of the pandemic phase’ of the coronavirus (Pictures: AP/Reuters) The US is out of the pandemic phase of the coronavirus, according to the nation’s top infectious disease expert. Dr Anthony Fauci, the White House’s chief medical adviser, made the declaration on Tuesday, more than two years after the widespread Covid-19 outbreak. PBS NewsHour’s Judy Woodruff asked Fauci: ‘Here we are. It’s the end of April. It’s the spring of 2022. How close are we to the end of the pandemic?’ ‘We are certainly, right now, in this country out of the pandemic phase,’ Fauci replied. Coronavirus cases have dropped dramatically since the Omicron variant surge in the winter (Picture: Getty Images) ‘Namely, we don’t have 900,000 new infections a day and tens and tens and tens of thousands of hospitalizations and thousands of deaths. We are at a low level right now.’ Fauci then reiterated: ‘So, if you’re saying, are we out of the pandemic phase in this country, we are.’ However, the director of the National Institute of Allergy and Infectious Diseases warned that ‘we’re not going to eradicate this virus’. Coronavirus cases have dropped dramatically in the last two months as the surge fueled by the Omicron variant has subsided. Still, cases are twice as high as they were for most of summer 2021, as the Omicron subvariant BA.2 continues to infect Americans. The US is in the ‘control’ phase of the coronavirus pandemic, according to the nation’s top infectious disease expert (Picture: Getty Images) Fauci early Wednesday told Washington Post that the US is now in the ‘control’ stage of the pandemic because Covid-19 is causing less deaths and hospitalizations than during the winter Omicron spike. ‘We’re really in a transitional phase, from a deceleration of the numbers into hopefully a more controlled phase and endemicity,’ Fauci told the newspaper. Fauci had detailed five phases of the pandemic: the full-blown pandemic, deceleration, control in which the virus becomes endemic in the population, elimination and finally but unlikely, eradication. More than 990,000 people have died of the coronavirus in the US and according to a New York Times estimate, the death count could hit 1million in a matter of a few weeks. Get in touch with our news team by emailing us at webnews@metro.co.uk. For more stories like this, check our news page.",
            "pubDate": "2022-04-27 18:12:34",
            "full_description": "The US is out of the pandemic phase of the coronavirus, according to the nation’s top infectious disease expert. Dr Anthony Fauci, the White House’s chief medical adviser, made the declaration on Tuesday, more than two years after the widespread Covid-19 outbreak. PBS NewsHour ’s Judy Woodruff asked Fauci: ‘Here we are. It’s the end of April. It’s the spring of 2022. How close are we to the end of the pandemic?’ ‘We are certainly, right now, in this country out of the pandemic phase,’ Fauci replied. ‘Namely, we don’t have 900,000 new infections a day and tens and tens and tens of thousands of hospitalizations and thousands of deaths. We are at a low level right now.’ Fauci then reiterated: ‘So, if you’re saying, are we out of the pandemic phase in this country, we are.’ However, the director of the National Institute of Allergy and Infectious Diseases warned that ‘we’re not going to eradicate this virus’. Coronavirus cases have dropped dramatically in the last two months as the surge fueled by the Omicron variant has subsided. Still, cases are twice as high as they were for most of summer 2021, as the Omicron subvariant BA.2 continues to infect Americans. Fauci early Wednesday told Washington Post that the US is now in the ‘control’ stage of the pandemic because Covid-19 is causing less deaths and hospitalizations than during the winter Omicron spike. ‘We’re really in a transitional phase, from a deceleration of the numbers into hopefully a more controlled phase and endemicity,’ Fauci told the newspaper. Fauci had detailed five phases of the pandemic: the full-blown pandemic, deceleration, control in which the virus becomes endemic in the population, elimination and finally but unlikely, eradication. More than 990,000 people have died of the coronavirus in the US and according to a New York Times estimate, the death count could hit 1million in a matter of a few weeks. Get in touch with our news team by emailing us at webnews@metro.co.uk . For more stories like this, check our news page . Not convinced? Find out more »",
            "image_url": "https://metro.co.uk/wp-content/uploads/2022/04/SEC_100986286.jpg?quality=90&strip=all",
            "source_id": "metro",
            "country": [
                "united kingdom"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "U.S., European Commission estimate most of their populations have contracted COVID-19",
            "link": "https://www.cbc.ca/news/health/europe-us-covid-infections-1.6432416?cmp=rss",
            "keywords": null,
            "creator": [
                "Reuters"
            ],
            "video_url": null,
            "description": "The European Commission said Wednesday that between 60 and 80 per cent of the European population was estimated to have contracted COVID-19, a rate comparable to an American estimate this week, as the highly transmissible Omicron variants have pushed infection rates up.",
            "content": null,
            "pubDate": "2022-04-27 18:03:45",
            "full_description": "The European Commission said Wednesday that between 60 and 80 per cent of the European population was estimated to have been infected with COVID-19. European Union governments should ramp up COVID-19 immunizations of children, the bloc's executive body said, also signaling it was considering plans to develop antivirals. \"It is estimated that between 60 per cent to 80 per cent of the EU population has by now had COVID,\" EU health commissioner Stella Kyriakides told a news conference. The EU public health agency said reported cases had covered about 30 per cent of the European population so far, but if unreported infections were added, cases could be as high as 350 million, about 77 per cent of the European population. With a recent drop in infections and deaths linked to COVID-19, the EU is now shifting away from mass testing and reporting of cases, Kyriakides said. Second Opinion Almost half of Canadians may have caught COVID COVID or gastrointestinal illness? Why it's hard to know right now But fresh COVID-19 surges are likely as the virus is expected to continue mutating, and therefore countries should have in place plans to shift back into emergency mode, the commission said. More than half of U.S. population has been infected: study The commission's comments come on the heels of a U.S. nationwide blood survey released on Tuesday, which estimated that 58 per cent of the U.S. population overall and more than 75 per cent of younger children have been infected with the coronavirus since the start of the pandemic. WATCH | Testing for COVID-19 through breath samples: Non-invasive COVID-19 tests aim to make testing more accessible 17 hours ago Duration 5:13 U.S. regulators have approved a device that can detect the presence of COVID-19 through breath samples, which could potentially make testing more accessible to people. Plus, infectious diseases expert Dr. Susy Hota explains why wastewater surveillance isn’t a sufficient replacement for proper COVID-19 testing. 5:13 That study, issued by the U.S. Centers for Disease Control and Prevention (CDC), marks the first time in which more than half of the U.S. population has been infected with the SARS-CoV-2 virus at least once. Before Omicron arrived in late 2021, a third of the U.S. population had evidence of a prior SARS-CoV-2 infection. Scientists looked for specific antibodies produced in response to the SARS-CoV-2 virus that are only present after an infection and are not generated by COVID-19 vaccines. Trace amounts of these antibodies can remain in the blood for as long as two years. Comparable national data for Canada is not yet readily available, but researchers in B.C. analyzed thousands of blood samples in the Lower Mainland throughout the pandemic to track antibody levels in the general population, and found a massive shift in the level of infection as Omicron and its variants have outperformed other variants to a staggering degree. The B.C. data, provided in advance to CBC News, found close to 40 per cent of the population had antibodies from a previous infection in March, up from around 10 per cent in October. More robust COVID-19 testing system needed in Canada, say experts Children's hospitals under strain in Canada's 6th COVID-19 wave Dr. Danuta Skowronski, a vaccine effectiveness expert and epidemiology lead at the British Columbia Centre for Disease Control who led the research, told CBC News that the research found that nearly two-thirds of children under 10 showed evidence of prior infection. In Ontario, official estimates now show as much as 40 per cent of the population was infected with COVID-19 since December alone. Concerns about drawdown of accurate data The collection of timely data has become a concern in many countries, including Canada. Since the onset of the Omicron variant, Canadian provinces and territories have scaled back access to PCR testing, citing the lack of capacity to keep up with demand and the need to free up health-care resources. While wastewater surveillance provides important data, it's less helpful in detecting emerging trends. Second Opinion Why navigating your COVID risk is now harder than ever Tedros Adhanom Ghebreyesus, director general of the World Health Organization, urged countries on Tuesday to maintain surveillance of coronavirus infections, saying the emerging state of affairs, \"makes us increasingly blind to patterns of transmission and evolution.\" Bill Rodriguez, chief executive of FIND, a global aid group working with WHO on expanding access to testing, said \"testing rates have plummeted by 70 to 90 per cent.\" Child vaccinations stressed European governments on Wednesday were urged by the commission to continue pushing for the immunization of the unvaccinated, especially children, before the start of the new school term in the autumn. Vaccinating eligible children against the coronavirus has been a struggle for many developed nations, with most North American and European countries starting their child inoculation drives between November and January. WATCH | Booster shots encouraged for eligible Canadian population: Canadians urged to get COVID-19 booster shots to blunt 6th wave 15 days ago Duration 2:00 All signs indicate Canada is going through a sixth pandemic wave, Dr. Theresa Tam confirms. Her message to Canadians: wear a mask and get boosted if eligible. 2:00 Immunization rates are below 15 per cent among European children aged between five and 9, the youngest age group for which COVID-19 vaccines have been authorized there. In the U.S., 28 per cent of children five to 11 as of April 20 were considered fully vaccinated, with 35 per cent having received at least one dose. Canada has fared better than most Western nations in vaccinating the youngest eligible children, but federal and provincial health officials have said they would like to see the rate rise even more. Nearly 41 per cent of Canadian kids aged five to 11 are fully vaccinated, according to Health Canada, and 56 per cent have received at least one dose As Omicron's transmissibility has seen the public health focus shift ever more so to preventing hospitalizations and serious outcomes, as opposed to preventing infection outright, antivirals are also increasingly of interest. Canadian pharmacists call for easier access to Paxlovid Antiviral pills against COVID-19 developed by Pfizer and Merck & Co have been approved for use in Canada, the U.S. and the EU. But their uptake has so far been limited in the West, due to a range of reasons including the slowing of the pandemic, high prices and some confusion on eligibility and how to prescribe them. U.S. President Joe Biden's administration is aiming to expand access to COVID-19 oral antiviral treatments like Pfizer's Paxlovid by doubling the number of locations at which they are available, the White House said Tuesday, with an emphasis on pharmacies.",
            "image_url": null,
            "source_id": "cbc",
            "country": [
                "canada"
            ],
            "category": [
                "health"
            ],
            "language": "english"
        },
        {
            "title": "Fauci asegura que EU salió de la fase de pandemia del covid-19",
            "link": "https://www.milenio.com/internacional/eu-salio-fase-pandemia-covid-19-anthony-fauci",
            "keywords": null,
            "creator": [
                "Milenio Digital,EFE"
            ],
            "video_url": null,
            "description": "El principal epidemiólogo de la Casa Blanca, Anthony Fauci, afirmó hoy que Estados Unidos salió de la fase de pandemia de la covid-19, al estar con bajos niveles de contagios, muertes y hospitalizaciones, afirmando además que el país está en una fase más controlada y endémica sobre el coronavirus.Las declaraciones de Fauci surgen en medio de varias semanas en que las medidas ante el covid-19 en Estados Unidos se han relajado, considerando que es el país más afectado por la pandemia que está actualmente en el mundo.\"Ciertamente ahora estamos en este país fuera de la fase de pandemia, es decir, no tenemos 900 mil nuevas infecciones diarias ni decenas y decenas y decenas de miles de hospitalizaciones y miles de muertes. Estamos a un nivel bajo ahora\", dijo Fauci en una entrevista con la cadena de televisión CBS.Pese a considerar que el país está fuera de la fase de pandemia, Fauci señaló que no cree que el coronavirus vaya a erradicarse.\"Lo que sí que podemos mantener es un nivel muy bajo y vacunar de forma intermitente a la gente, no sé con qué frecuencia, podría ser cada año, o incluso cada más tiempo para mantener el nivel bajo, pero ahora no estamos en la fase de pandemia en el país\", remarcó.No obstante, apuntó que si se observa la situación mundial \"no hay duda de que la pandemia sigue\", ya que, explicó, todavía hay contagios muy rápidos y de forma amplia en distintas partes del mundo.\"Realmente estamos en una fase de transición, de una desaceleración de los números a, con suerte, una fase más controlada y endémica\", sostuvo posteriormente a The Washington Post.Según los datos de los Centros de Control y Prevención de Enfermedades (CDC, en inglés), los nuevos casos diarios de covid-19 en Estados Unidos no están superando los 60 mil en abril, tras el repunte sufrido en enero por la variante omicron donde se sobrepasó el millón de nuevos contagios al día.Del mismo modo, los fallecidos por la enfermedad muestran una tendencia a la baja con menos de 500 diarias, e incluso con cifras por debajo de las 100 en algunas jornadas.Durante la entrevista, Fauci fue preguntado también por la efectividad de un tratamiento por el que ha apostado el gobierno de Estados Unidos a la hora de tratar la covid-19, las pastillas antivirales Paxlovid, de la farmacéutica Pfizer.El epidemiólogo destacó que \"se trata de una terapia altamente efectiva\" y subrayó que en los ensayos clínicos quedó demostrado que el 90 por ciento de los voluntarios a los que se le administró este tratamiento quedaron protegidos ante un empeoramiento de la enfermedad y de acabar hospitalizados.Fauci dijo que el gobierno tiene muchas dosis disponibles y que hay sitios donde la persona puede hacerse un test de covid, y si da positivo, recibir Paxlovid de inmediato.?",
            "content": null,
            "pubDate": "2022-04-27 17:57:23",
            "image_url": "http://www.milenio.com/uploads/media/2021/08/12/anthony-fauci-principal-epidemiologo-unidos.jpg",
            "source_id": "milenio",
            "country": [
                "mexico"
            ],
            "category": [
                "top"
            ],
            "language": "spanish"
        },
        {
            "title": "Can We Trust Rapid COVID Tests Against BA.2? This Is What The Experts Say",
            "link": "https://laist.com/news/health/can-we-trust-rapid-covid-tests-against-ba-2-this-is-what-the-experts-say",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "With the BA.2 subvariant of omicron pushing infection rates up, many are reaching for at-home rapid tests. Here's what experts say on how best to use them.",
            "content": null,
            "pubDate": "2022-04-27 17:53:47",
            "full_description": "COVID-19 cases have been slowly ticking up in the U.S., with the omicron BA.2 subvariant now the dominant strain in the country. At the same time, rapid at-home antigen tests have become the first choice diagnostic tool for many people who think they might be infected. While these rapid tests are useful in detecting the spread of COVID-19, the high infectivity of BA.2 and concerns around self-reporting have given rise to a number of questions. Here is what two health experts have to say. Although we've long known that rapid tests have a lower degree of accuracy compared to the standard PCR test , there is no indication they are any less effective at detecting BA.2 than previous variants we've seen. That said, rapid tests might take longer to yield a positive result, according to Dr. Celine Gounder, a senior fellow and editor-at-large for public health at Kaiser Health News. \"There's usually a day or two delay between when you might test positive on a PCR versus when you might test positive on one of these at-home rapid antigen tests,\" Gounder said. \"But they do work to pick up an infection, and they should be used frequently.\" However, given the higher infectivity of BA.2, there is a chance that the virus might infect others before a positive result is seen on a rapid test, according to Dr. Wilbur Lam, a physician and biomedical engineer who works with the federal government in assessing COVID-19 diagnostic tests. \"One aspect about omicron [including the BA.2 subvariant] is biologically, it likely is more infective than the other previous variants,\" Lam said. \"So the test might not even have time to pick it up before it jumps from one person to another person.\" Nevertheless, rapid antigen tests have the advantage of being widely available and delivering a result within minutes, he said. The key to using them effectively against BA.2 is to test early and frequently. \"Because these things are more available than PCR testing, each person, if they're able to get hold of them, can test themselves serially,\" Lam said, adding that people should test multiple days after the onset of symptoms. \"That serial testing does end up mitigating the drawbacks of at least the accuracy of these types of tests compared to PCR tests.\" Some people may find they have symptoms consistent with a COVID-19 infection, but they are still testing negative on rapid tests. If you find yourself in a situation like this, Lam says context is key for determining what to do next. If you continue to test negative, he said you might be fine to carry on with your daily life, as long as you aren't planning on being around people who are immunocompromised. However, if you plan on being around people who are at higher risk of severe illness, you should consider taking extra precautions for their sake. \"[If] you're going to visit, for example, an elderly family member who is immunocompromised due to cancer and chemotherapy, that's when I would say take some extra precautions, even if you're negative,\" Lam said. \"So continue to mask, test again, maybe get a PCR test.\" While at-home tests make it easier for people to detect a COVID infection, the current data might not reflect actual infection rates if there is a lack of self-reporting. \"This is an important question that the governmental, medical and public health communities are just now scratching the surface of,\" Lam said. \"In fact, the current BA.2 case numbers may be underestimating the true numbers because a significant number of positive cases are self-detected and unreported.\" And while some rapid tests offer smartphone apps to help people self-report a positive result, there isn't any requirement to do so. The Centers for Disease Control and Prevention encourages people to report any positive results to their health care providers, who can make sure they receive the appropriate medical care. That could include specific treatments if necessary. According to the CDC : \"The public health community, including CDC, is confident that situational awareness remains strong without receiving self-test results.\" Currently, every household in the U.S. is able to order two sets of four free at-home tests through covid.gov . However, these tests don't last forever and additional tests are not free. Both Gounder and Lam say it's best to follow the manufacturer's suggested expiration date. However, if you have an old rapid test on hand, they say it could be useful for a time, although there's no consensus on exactly how long. \"The rapid tests are fundamentally biological and biochemical in nature and bear some similarities to food products, at least as far as the expiration date is concerned,\" Lam said. \"Therefore, a test will not go 'bad' immediately after the expiration date, but will gradually degrade over time.\" Gounder suggests storing tests in order of expiration date so that you are using the oldest ones first. Copyright 2022 NPR. To see more, visit npr.org .",
            "image_url": "https://scpr.brightspotcdn.com/dims4/default/c7ccab1/2147483647/strip/false/crop/2643x1982+0+0/resize/704x528!/quality/90/?url=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2022%2F04%2F26%2Fgettyimages-1238651756-17a40e44e68e5d54346019eb80dc7547992e2de1.jpg",
            "source_id": "laist",
            "country": [
                "united states of america"
            ],
            "category": [
                "health"
            ],
            "language": "english"
        },
        {
            "title": "Why F5 Networks Plummeted 13% Today",
            "link": "https://www.fool.com/investing/2022/04/27/why-f5-networks-plummeted-13-today/?source=iedfolrf0000001",
            "keywords": null,
            "creator": [
                "newsfeedback@fool.com (Billy Duberstein)"
            ],
            "video_url": null,
            "description": "The chip shortage is throwing a wrench into the company's hardware segment.",
            "content": "Shares of F5 Network (NASDAQ: FFIV) were plummeting today, down 13% as of 12:35 p.m. ET. The company, which makes both hardware and software that houses, governs, protects and deploys business software applications, issued light guidance for the rest of the year, even as last quarter's revenue met and earnings per share beat expectations.Once again, investors can blame ongoing semiconductor shortages for F5's woes.In the fiscal second quarter of 2022, which ended March 31, F5's total revenue was down 2%, but there was a big difference between its segments. While the smaller software segment grew 40%, hardware was down 27%, which management blamed entirely on semiconductor shortages. Given the ongoing supply chain woes due to China shutting down major cities to combat the omicron variant of the coronavirus, management also lowered its full-year guidance from between 4.5% and 8% growth to between just 1.5% and 4% growth. Software growth of 35% to 40% is unchanged, but obviously the hardware component of revenue, which remains a majority of F5's business, remains a wild card. Continue reading",
            "pubDate": "2022-04-27 17:52:38",
            "image_url": null,
            "source_id": "fool",
            "country": [
                "canada"
            ],
            "category": [
                "business"
            ],
            "language": "english"
        },
        {
            "title": "White House pleads for more COVID funding",
            "link": "https://www.wcpo.com/news/national/white-house-pleads-for-more-covid-funding-gop-questions-spending",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "Japan, Vietnam, the Philippines and Hong Kong have all placed orders for treatments and vaccine doses that the U.S. can't yet commit to, according to the White House.",
            "content": "For much of the past two years, America has been first in line for COVID-19 vaccines and treatments. Now, as drugmakers develop the next generation of therapies, the White House is warning that if Congress doesn’t act urgently the U.S. will have to take a number.Tune in for a briefing with Press Secretary Jen Psaki and Dr. Ashish Jha. https://t.co/R1ZZjAX9PM— The White House (@WhiteHouse) April 26, 2022 Already the congressional stalemate over virus funding has forced the federal government to curtail free treatment for the uninsured and to ration monoclonal antibody supplies. And Biden administration officials are expressing increasing alarm that the U.S. is also losing out on critical opportunities to secure booster doses and new antiviral pills that could help the country maintain its reemerging sense of normalcy, even in the face of potential new variants and case spikes.Japan, Vietnam, the Philippines and Hong Kong have all placed orders for treatments and vaccine doses that the U.S. can't yet commit to, according to the White House.Months ago, the White House began warning that the country had spent the money in the $1.9 trillion American Rescue Plan that was dedicated directly to COVID-19 response. It requested an additional $22.5 billion for what it called “urgent” needs in both the U.S. and abroad.The Senate last month closed in on a smaller $10 billion package focused on domestic needs. But even that deal fell apart as lawmakers objected to an announcement from the Centers for Disease Control and Prevention that it would end Trump-era border restrictions related to the pandemic.The White House this week is mounting a push for doctors to get less stingy about prescribing the antiviral pill Paxlovid, which was initially rationed for those at the highest risk for severe outcomes from COVID-19 but is now more widely available. A 20 million-dose order placed last year by the government helped boost manufacturing capacity.The U.S. used similar advance-purchase agreements to boost the domestic supply and manufacture of COVID-19 vaccines, through what was known in the Trump administration as “Operation Warp Speed.”Now, with a new generation of treatments on the horizon, the U.S. is falling behind.Because of the funding delays, officials say, the U.S. has yet to place an advance order for drugmaker Shionogi's upcoming COVID-19 antiviral pill, which would help the company scale manufacturing to ramp up production.Complicating matters further are the long lead times to manufacture the antiviral and antibody treatments. Paxlovid takes about six months to produce, and monoclonal antibody treatments used to treat COVID-19 and prevent serious disease in the immunocompromised take similarly long, meaning the U.S. is running out of time to replenish its stockpile before the end of the year.The funding debate is also holding up U.S. purchases of COVID-19 vaccine booster doses, including an upcoming new generation of vaccines that may better protect against the omicron variant.The Biden administration has said that while the U.S. has enough vaccine doses for children under 5, once they are approved by regulators, and for fourth shots for high-risk people over 50, it doesn’t have the money to order the new generation of doses.Republicans have shown no signs of backing down from their insistence that before supplying the 10 GOP votes needed for the COVID-19 funding package to pass the Senate, the chamber must vote on their effort to extend the Trump-era Title 42 order. That COVID-linked order, which requires authorities to immediately expel nearly all migrants at the border, is set to be lifted on May 23.An election-year vote to extend that order would be perilous for Democrats, and many hope no such vote occurs. Many say privately they hope President Biden will keep the immigration curbs in place or that a court will postpone the rules’ termination, but Republicans could well force a vote anyway.Additional reporting by The Associated Press.Newsy is the nation’s only free 24/7 national news network. You can find Newsy using your TV’s digital antenna or stream for free. See all the ways you can watch Newsy here.",
            "pubDate": "2022-04-27 17:47:31",
            "image_url": null,
            "source_id": "wcpo",
            "country": [
                "united states of america"
            ],
            "category": [
                "top"
            ],
            "language": "english"
        },
        {
            "title": "El epidemiólogo de la Casa Blanca afirma que EEUU salió de la fase de pandemia",
            "link": "https://www.lapatilla.com/2022/04/27/el-epidemiologo-de-la-casa-blanca-afirma-que-eeuu-salio-de-la-fase-de-pandemia/",
            "keywords": [
                "Actualidad",
                "Internacionales",
                "afirma",
                "EEUU salió de pandemia",
                "epidemiólogo"
            ],
            "creator": [
                "Cesar Saavedra"
            ],
            "video_url": null,
            "description": "        El principal epidemiólogo de la Casa Blanca, Anthony Fauci, afirmó este miércoles que Estados Unidos salió de la fase de pandemia […]",
            "content": "Fotografía de archivo en la que se registró al epidemiólogo consejero de la Casa Blanca, Anthony Fauci, en Washington DC (EE.UU.). EFE/Leigh Vogel/Pool         El principal epidemiólogo de la Casa Blanca, Anthony Fauci, afirmó este miércoles que Estados Unidos salió de la fase de pandemia de la covid-19, al estar con bajos niveles de contagios, muertes y hospitalizaciones. “Ciertamente ahora estamos en este país fuera de la fase de pandemia, es decir, no tenemos 900.000 nuevas infecciones diarias ni decenas y decenas y decenas de miles de hospitalizaciones y miles de muertes. Estamos a un nivel bajo ahora”, dijo Fauci en una entrevista con la cadena de televisión CBS. Pese a considerar que el país está fuera de la fase de pandemia, Fauci señaló que no cree que el coronavirus vaya a erradicarse. “Lo que sí que podemos mantener es un nivel muy bajo y vacunar de forma intermitente a la gente, no sé con qué frecuencia, podría ser cada año, o incluso cada más tiempo para mantener el nivel bajo, pero ahora no estamos en la fase de pandemia en el país”, remarcó. No obstante, apuntó que si se observa la situación mundial “no hay duda de que la pandemia sigue”, ya que, explicó, todavía hay contagios muy rápidos y de forma amplia en distintas partes del mundo. Según los datos de los Centros de Control y Prevención de Enfermedades (CDC, en inglés), los nuevos casos diarios de covid-19 en EE.UU. no están superando los 60.000 en abril, tras el repunte sufrido en enero por la variante omicron donde se sobrepasó el millón de nuevos contagios al día. Del mismo modo, los fallecidos por la enfermedad muestran una tendencia a la baja con menos de 500 diarias, e incluso con cifras por debajo de las 100 en algunas jornadas. Durante la entrevista, Fauci fue preguntado también por la efectividad de un tratamiento por el que ha apostado el Gobierno de EE.UU. a la hora de tratar la covid-19, las pastillas antivirales Paxlovid, de la farmacéutica Pfizer. El epidemiólogo destacó que “se trata de una terapia altamente efectiva” y subrayó que en los ensayos clínicos quedó demostrado que el 90% de los voluntarios a los que se le administró este tratamiento quedaron protegidos ante un empeoramiento de la enfermedad y de acabar hospitalizados. Fauci dijo que el Gobierno tiene muchas dosis disponibles y que hay sitios donde la persona puede hacerse un test de covid, y si da positivo, recibir Paxlovid de inmediato. EFE",
            "pubDate": "2022-04-27 17:41:38",
            "image_url": null,
            "source_id": "lapatilla",
            "country": [
                "venezuela"
            ],
            "category": [
                "top"
            ],
            "language": "spanish"
        },
        {
            "title": "Fauci afirma que EU ya salió de la fase de pandemia",
            "link": "https://www.forbes.com.mx/fauci-afirma-que-eu-ya-salio-de-la-fase-de-pandemia/",
            "keywords": [
                "Actualidad",
                "Covid-19",
                "Estados Unidos"
            ],
            "creator": [
                "Forbes Staff"
            ],
            "video_url": null,
            "description": "Forbes México. Fauci afirma que EU ya salió de la fase de pandemia El principal epidemiólogo de la Casa Blanca dijo que EU ya está fuera de la fase de pandemia por Covid-19 al estar en un nivel de contagios, hospitalizados y muertes muy bajo. Fauci afirma que EU ya salió de la fase de pandemia Forbes Staff",
            "content": "Forbes México. Fauci afirma que EU ya salió de la fase de pandemia EFE.- El principal epidemiólogo de la Casa Blanca, Anthony Fauci, afirmó este miércoles que Estados Unidos salió de la fase de pandemia por Covid-19, al estar con bajos niveles de contagios, muertes y hospitalizaciones. “Ciertamente ahora estamos en este país fuera de la fase de pandemia, es decir, no tenemos 900,000 nuevas infecciones diarias ni decenas y decenas y decenas de miles de hospitalizaciones y miles de muertes. Estamos a un nivel bajo ahora”, dijo Fauci en una entrevista con la cadena de televisión CBS. Pese a considerar que el país está fuera de la fase de pandemia, Fauci señaló que no cree que el coronavirus vaya a erradicarse. “Lo que sí que podemos mantener es un nivel muy bajo y vacunar de forma intermitente a la gente, no sé con qué frecuencia, podría ser cada año, o incluso cada más tiempo para mantener el nivel bajo, pero ahora no estamos en la fase de pandemia en el país”, remarcó. No obstante, apuntó que si se observa la situación mundial “no hay duda de que la pandemia sigue”, ya que, explicó, todavía hay contagios muy rápidos y de forma amplia en distintas partes del mundo. Según los datos de los Centros de Control y Prevención de Enfermedades (CDC, por sus siglas en inglés), los nuevos casos diarios de covid-19 en Estados Unidos no están superando los 60,000 en abril, tras el repunte sufrido en enero por la variante omicron donde se sobrepasó el millón de nuevos contagios al día. Del mismo modo, los fallecidos por la enfermedad muestran una tendencia a la baja con menos de 500 diarias, e incluso con cifras por debajo de las 100 en algunas jornadas. Sigue la información sobre los negocios y la actualidad en Forbes México Durante la entrevista, Fauci fue preguntado también por la efectividad de un tratamiento por el que ha apostado el Gobierno de Estados Unidos a la hora de tratar el Covid-19, las pastillas antivirales Paxlovid, de la farmacéutica Pfizer. El epidemiólogo destacó que “se trata de una terapia altamente efectiva” y subrayó que en los ensayos clínicos quedó demostrado que el 90% de los voluntarios a los que se le administró este tratamiento quedaron protegidos ante un empeoramiento de la enfermedad y de acabar hospitalizados. Fauci dijo que el Gobierno tiene muchas dosis disponibles y que hay sitios donde la persona puede hacerse un test de covid, y si da positivo, recibir Paxlovid de inmediato. Síguenos en Google Noticias para mantenerte siempre informado Fauci afirma que EU ya salió de la fase de pandemia Forbes Staff",
            "pubDate": "2022-04-27 17:28:57",
            "full_description": "EFE.- El principal epidemiólogo de la Casa Blanca, Anthony Fauci, afirmó este miércoles que Estados Unidos salió de la fase de pandemia por Covid-19, al estar con bajos niveles de contagios, muertes y hospitalizaciones. “Ciertamente ahora estamos en este país fuera de la fase de pandemia, es decir, no tenemos 900,000 nuevas infecciones diarias ni decenas y decenas y decenas de miles de hospitalizaciones y miles de muertes. Estamos a un nivel bajo ahora”, dijo Fauci en una entrevista con la cadena de televisión CBS . Pese a considerar que el país está fuera de la fase de pandemia, Fauci señaló que no cree que el coronavirus vaya a erradicarse. “Lo que sí que podemos mantener es un nivel muy bajo y vacunar de forma intermitente a la gente, no sé con qué frecuencia, podría ser cada año, o incluso cada más tiempo para mantener el nivel bajo, pero ahora no estamos en la fase de pandemia en el país”, remarcó. No obstante, apuntó que si se observa la situación mundial “no hay duda de que la pandemia sigue”, ya que, explicó, todavía hay contagios muy rápidos y de forma amplia en distintas partes del mundo. Según los datos de los Centros de Control y Prevención de Enfermedades (CDC, por sus siglas en inglés), los nuevos casos diarios de covid-19 en Estados Unidos no están superando los 60,000 en abril, tras el repunte sufrido en enero por la variante omicron donde se sobrepasó el millón de nuevos contagios al día. Del mismo modo, los fallecidos por la enfermedad muestran una tendencia a la baja con menos de 500 diarias, e incluso con cifras por debajo de las 100 en algunas jornadas. Sigue la información sobre los negocios y la actualidad en Forbes México Durante la entrevista, Fauci fue preguntado también por la efectividad de un tratamiento por el que ha apostado el Gobierno de Estados Unidos a la hora de tratar el Covid-19, las pastillas antivirales Paxlovid, de la farmacéutica Pfizer. El epidemiólogo destacó que “se trata de una terapia altamente efectiva” y subrayó que en los ensayos clínicos quedó demostrado que el 90% de los voluntarios a los que se le administró este tratamiento quedaron protegidos ante un empeoramiento de la enfermedad y de acabar hospitalizados. Fauci dijo que el Gobierno tiene muchas dosis disponibles y que hay sitios donde la persona puede hacerse un test de covid, y si da positivo, recibir Paxlovid de inmediato. Síguenos en Google Noticias para mantenerte siempre informado",
            "image_url": null,
            "source_id": "forbes_mx",
            "country": [
                "mexico"
            ],
            "category": [
                "top"
            ],
            "language": "spanish"
        }
    ];

    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState("");
    const [wind, setWind] = useState("");
    const [icon, setIcon] = useState("");
    const [description, setDescription] = useState("");


    useEffect(() => {
        const doSearch = async () => {

            const { data } = await Axios.get("https://newsdata.io/api/1/news?apikey=" + apiKey + "&q=omicron&language=en")
            //console.log(data.results)
            // setNewsList(data.results)
            setNewsList(n)
        }
        doSearch();

    }, [])



    const renderedItems = newsList.map((item) => {
        if (item.image_url !== null) {
            return (
                <Card>
                    <Card.Header as="h5">{item.title} {item.creator !== null ? `[ by ${item.creator[0]}]` : ""}</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col lg={4}>
                                <Card.Img src={item.image_url} alt="Card image" />
                            </Col>
                            <Col>
                                <Card.Title>{item.description}</Card.Title>
                                <Card.Text>
                                    {item.pubDate}
                                </Card.Text>
                            </Col>
                        </Row>
                        <br></br>
                        <Button variant="primary" href={item.link}>Link</Button>
                    </Card.Body>
                </Card >
            )
        } else {
            return (
                <Card>
                    <Card.Header as="h5">{item.title} {item.creator !== null ? `[ by ${item.creator[0]}]` : ""}</Card.Header>
                    <Card.Body>
                        <Row>

                            <Col>
                                <Card.Title> {item.description}</Card.Title>
                                <Card.Text>
                                    {item.pubDate}
                                </Card.Text>

                            </Col>
                        </Row>
                        <br></br>
                        <Button variant="primary" href={item.link}>Link</Button>
                    </Card.Body>
                </Card >
            )
        }
    });



    // if (error) {
    //     return <div>Ошибка: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Загрузка...</div>;
    // } else {
    return (
        <Container>
            <br></br>
            <Row xs={1} md={8} className="g-4">
                {renderedItems}
            </Row>
        </Container >
    )
    // }
}

export default News;


