export default {
    data() {
        return {
            fr: {
                home: "Accueil",
                about: "Moi",
                iam: "Je suis",
                mon: "Mon",
                works: "Travaux",
                name: "Lucas JAOUEN.",
                metier: "A la recherche d'un stage",
                bio: "Je suis en deuxième année d'école d'ingénieurs : le Cnam ENJMIN à Angoulême, France qui est l'Ecole Nationale des Jeux Vidéo et du Multimédia.",//Je suis un concepteur de sites Web et un développeur front-end basé en France, axé sur la création d'expériences propres et conviviales. Je suis passionné par la création d'excellents logiciels qui améliorent la vie de ceux qui m'entourent.
                bio2: "Je recherche activement un stage à l'étranger d'au moins 8 semaines pour l'été 2023.",
                labelBtn: "en savoir plus sur moi",
                moi: "Moi",
                apropos: "A propos de",
                educationContentyear1: "Sept 2021 - Aujourd'hui",
                educationdegree1: "Diplôme d'ingénieur informatique et multimédia",
                educationinstitute1: "CNAM ENJMIN",
                educationdetails1: `Actuellement, je suis en deuxième année de mon diplôme d'ingénieur en Informatique et Multimédia`,

                educationContentyear2: "Sept 2019 - Sept 2021",
                educationContentdegree2: "DUT INFO (Diplôme Universitaire de Technologie en Informatique)",
                educationContentinstitute2: "CNAM Paris",
                educationContentdetails2: `Mémoire sur le développement Back-End & Front-End d'une application interne et l'année suivante, un autre mémoire Soutenance de fin d'études`,


                educationContentyear3: "Sept 2018 - Nov 2018",
                educationContentdegree3: "DUT GMP (Diplôme Universitaire de Technologie en Génie Mécanique et Productique) ",
                educationContentinstitute3: "CNAM PARIS",
                educationContentdetails3: `Réorientation dans le cadre de mon projet professionnel`,

                educationContentyear4: "2015 - 2018",
                educationContentdegree4: "BAC S ",
                educationContentinstitute4: "Lycée la Tour des Dames",
                educationContentdetails4: `Obtenu en juillet 2018`,

                experienceContentyear1: "   Sept 2021 - Aujourd'hui",
                experienceContentposition1: "Apprenti ingénieur informatique",
                experienceContentcompnayName1: "MIDIPILE",
                experienceContentdetails1: ` - Développement et conception d'une IHM pour un nouveau véhicule`,
                experienceContentdetails1bis: `- Mise en place de services connectés / gestion de flotte`,

                experienceContentyear2: "Sept 2019 - Sept 2021",
                experienceContentposition2: "Assistante chef de projet applicatif",
                experienceContentcompnayName2: "AFPA",
                experienceContentdetails2: `- Ingénieur Junior Front-End/Back-End Support/Développement sur une application interne PANDA en utilisant la méthode Agile Scrum`,
                experienceContentdetails2bis: `- Processus d'intégration et de recette d'une application interne Magellan, GESPLAN, GESPERS, GESPROD, GESCAN/GESCOVE, avant le processus de Production, création de tickets si erreurs`,
                experienceContentdetails2tiers: `- Des réunions plusieurs fois par mois pour faire le point sur les évolutions`,

                experienceContentyear3: "2019",
                experienceContentposition3: "Sauveteur Secouriste Aquatique",
                experienceContentcompnayName3: "Hotel New Port Bay Club Disney",
                experienceContentdetails3: `- Surveillance de bassin`,
                experienceContentdetails3bis:`- Accueil des clients en français, anglais et espagnol`,

                firstName : "Prénom",
                prenomInfo : "Lucas",
                nomInfo : "JAOUEN",
                infoAge : "22 ans",
                infoNationalite: "Française",
                lastName : "Nom",
                Age: "Age",
                Nationality: "Nationalité",
                internship: "Internship",
                infoInternship: "30/05/22 au 21/07/22",
                address : "Adresse",
                addressInfo : "Angouleme",
                phone : "Tel",
                phoneInfo : "+33670868818",
                insta : "Insta",
                instaInfo : "lucas_jaouen",
                email : "Email",
                emailInfo : "lucas.jaouen1@gmail.com",
                langages : "Langues",
                langagesInfo : "Français, Anglais, Espagnol",
                infoPersTitle: "Infos personnelles",
                skills: "Mes compétences",

                achievementTitle1 : "3",
                achievementsubTitle1 : "ans",
                achievementsubTitle1bis : "d'experience",
                
                achievementTitle2 : "10",
                achievementsubTitle2 : "projets",
                achievementsubTitle2bis : "complétés",

                achievementTitle3 : "30",
                achievementsubTitle3 : "heureux",
                achievementsubTitle3bis : "associés",

                achievementTitle4 : "200",
                achievementsubTitle4 : "belles",
                achievementsubTitle4bis : "rencontres",
                enter : "Me",
                touch : "contacter",
                contactTitle : "Ne soyez pas timide !",
                paragContact : "N'hésitez pas à me contacter. Je suis toujours ouvert pour discuter de nouveaux projets, d'idées créatives ou d'opportunités.",
                addressCarte : "Point d'adresse",
                mailMe : "Par mail",
                callMe : "Par tel",
                labelBtnSendMail : "Envoyer le message",
                placeholderName : "Votre nom",
                placeholderEmail : "Votre email",
                placeholderSubject : "Votre sujet",
                placeholderMessage : "Votre message",
                labelDownloadCV : "Télécharger CV",
                alertmsg: "Message envoyé !",

                blogs: [
                    {
                      id: 1,
                      img: require(`@/assets/images/blog/blog-post-1.jpg`),
                      title: "Une nouvelle carte montre comment les vents solaires pleuvent partout sur Mars",
                      commentor: "SCOTT ALAN JOHNSTON",
                      date: "05 Septembre 2022",
                      tag: `univers, mars, solaire, vents`,
                      description1:
                        "Dans un effort conjoint entre le vaisseau spatial MAVEN de la NASA et la mission Emirates Mars (EMM) des Émirats arabes unis, les scientifiques ont observé une interaction inhabituellement chaotique entre le vent solaire et la haute atmosphère de Mars, créant une aurore ultraviolette unique. Le phénomène représente un événement inhabituel dans la météo spatiale martienne, et les scientifiques sont ravis de profiter des futures collaborations entre les engins spatiaux pour garder un œil sur les événements répétés.",
                      description2:
                        "Les observations d'EMM suggéraient que les aurores étaient si répandues et désorganisées que l'environnement plasmique autour de Mars devait être véritablement perturbé, au point que le vent solaire impactait directement la haute atmosphère partout où nous observions des émissions aurorales… En combinant les observations aurorales EMM avec les mesures MAVEN de l'environnement du plasma auroral, nous pouvons confirmer cette hypothèse et déterminer que ce que nous voyions était essentiellement une carte de l'endroit où le vent solaire pleuvait sur la planète.",
                      description3:
                        "Il s'agissait essentiellement d'une panne temporaire des défenses naturelles de Mars contre le rayonnement solaire, lorsque les particules ont pu profiter de la météo chaotique de l'espace pour trouver un chemin vers l'atmosphère de la planète.",
                      description4:
                        "MAVEN est arrivé sur Mars en 2014 et a été rejoint par EMM en 2021. Il y a plus d'une demi-douzaine de sondes en orbite martienne, chacune avec des spécialités et des capacités différentes. En travaillant ensemble, ils peuvent nous aider à comprendre Mars d'une manière qu'ils ne peuvent pas faire seuls, notamment en étudiant ses aurores uniques.",
                    },
                    {
                      id: 2,
                      img: require(`@/assets/images/blog/blog-post-2.jpg`),
                      title: "Top 10 Toolkits for Deep Learning in 2022",
                      commentor: "Santhan ",
                      date: "14 January 2022",
                      tag: `wordpress, business, economy, design`,
                      description1:
                        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                      description2:
                        "If you’ve been waiting for an invitation, this calligraphy is it. Commissioned by Notebook hand-lettered design for a poster. Quote is Notebook Building 8 VP’s Regina Dugan—and mine. ",
                      description3:
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
                      description4:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                      id: 3,
                      img: require(`@/assets/images/blog/blog-post-3.jpg`),
                      title: "Everything You Need to Know About Web Accessibility",
                      commentor: "steve ",
                      date: "9 January 2020",
                      tag: `wordpress, business, economy, design`,
                      description1:
                        "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                      description2:
                        "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
                      description3:
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
                      description4:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
            
                    {
                      id: 4,
                      img: require(`@/assets/images/blog/blog-post-4.jpg`),
                      title: "How to Inject Humor & Comedy Into Your Brand",
                      commentor: "Beker ",
                      date: "15 March 2022",
                      tag: `wordpress, business, economy, design`,
                      description1:
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas",
                      description2:
                        "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
                      description3:
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
                      description4:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                      id: 5,
                      img: require(`@/assets/images/blog/blog-post-5.jpg`),
                      title: "Women in Web Design: How To Achieve Success",
                      commentor: "Janntul ",
                      date: "9 January 2021",
                      tag: `wordpress, business, economy, design`,
                      description1:
                        "Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                      description2:
                        "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
                      description3:
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
                      description4:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                    {
                      id: 6,
                      img: require(`@/assets/images/blog/blog-post-6.jpg`),
                      title: "Evergreen versus topical content: An overview",
                      commentor: "Hasan ",
                      date: "9 January 2022",
                      tag: `wordpress, business, economy, design`,
                      description1:
                        "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                      description2:
                        "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
                      description3:
                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
                      description4:
                        "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    },
                  ],


            }
        }
    }
}