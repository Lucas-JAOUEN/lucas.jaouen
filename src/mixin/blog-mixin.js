export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          img: require(`@/assets/images/blog/blog-post-1.jpg`),
          title: "Planets that could harbor life",
          commentor: "Lucas JAOUEN",
          date: "14 September 2022",
          tag: `universe, news, planets, like, earth`,
          description1:
            `In this blog I will tell you about major discoveries in the space field, more precisely about potential earth-like planets in our solar system in terms of habitability criteria. `,
          description2:
          `This immensity never ceases to fascinate me with its unimaginable continual expansion.  Aslong as we are a grain of sand in a desert, many questions arise including one "Are we alone in the universe?"`,
          description3:
          `Recent discovery shows that not so far from us there would be planets with similar living conditions including of course the planet neighboring ours Mars.`,
          
          description4:
            "Mars",

          description5:
            `The mystery of life on Mars does not date from today, indeed since the launch of Curiosity on August 6, 2012 many discoveries have been made upsetting the world.
            The very first and one of the most important: the presence of water on Mars. Once on Mars, Curiosity found some kind of pebbles in the Gale crater. Analyses have shown that the latter would have polished themselves in a little salty river one meter deep. 
            `,
          description6:
            `Then he discovered fascinating rock "Strathdon", in the 22nd hole dug in the Martian soil, telling us  more about its wet past given the leafy appearance of the rock suggests that potentially violent winds and waters shaped it.
            Another important discovery comes from the Cumberland drilling. Indeed, a sample collected revealed the presence of sulfur, nitrogen, oxygen, phosphorus or carbon on Mars being chemical elements necessary for the development of microbial life. Moresurprisingly, boron capable of stabilizing the sugars used to make RNA has been identified.
            `,

          description7:
            `Curiosity does not stop there, it has also detected methane particles in the Martian atmosphere at least six times by its spectrometer. However, almost all of this chemical compound originates on our planet Earth by living organisms, which further questions scientists. Nevertheless, this could come from geological processes when rocks come into contact with liquid water.`,

          description8:
            `The rover also discovered that on the Martian hills, rocks prevented the various ionizing rays from reaching it. Interestingdata  in view of the potential trips to the red planet in order to be able to protect against dangerous radiation since there is no longer a protective magnetic field on our neighbor.`,

          description9:
            `Today, Curiosity is still working properly! So much so that NASA has decided to extend the MSL (Mars Science Laboratory) mission until September 2025. After analyzing Gale Crater, he is currently discovering a new region that has not yet been explored. We know that the soil is composed mainly of sulfates which should shed light on the climate transition that has caused the current aridity on Mars.`,

          description10:
            `Meanwhile Curiosity is no longer alone, it has been joined by the Perseverance rover  of the Mars 2020 mission since February 18, 2021 for the collection of samples and previously by the  InSight lander on November 26, 2018 which aims to study the internal structure of the red planet.`,

          description11:  
            `Venus`,

          description12:
            `Earth's other neighbor Venus could also harbor life. Indeed, a recent discovery of the presence of a molecule potentially linked to life in the atmosphere of Venus revives conjectures on the possibility of finding an extraterrestrial life form in our solar system.`,

          description13:
            `This famous is a gaseous compound, phosphine (PH3). The presence of such a molecule, toxic for the majority of terrestrial beings, would have another connotation on Venus or Mars. This molecule being unstable in a gaseous environment where oxygen is present, no process, known to date, could explain the presence of phosphine except the continuous production of this gas by a biological activity.`,

          description14:
            `These discoveries are astonishing when we know that on this star the temperatures are extreme (more than 450°C near the surface). However, there is still one place where scientists suspect the presence of life: clouds. Very similar to those on Earth due to the altitude at which they are formed as well as the temperature and pressure conditions that allow all the nutrients and energy necessary for the development of micro-organisms to be found there.`,

          description15:
            `Europe`,

          description16:
            `Also in our solar system, there is another planet that intrigues scientists: Europa. One of Jupiter's 4 moons could well be another contender. There would be an ocean of liquid water under a mantle of ice as well as cryovolcanic activity. We can therefore imagine that  organic elements such as impacts of comets penetrating the liquid ocean couldint allow to have habitability criteria.`,

          description17:
            `This natural satellite intrigues the world so much that probes will be created to make observations: NASA's Europa Clipper probe under development and the European JUICE probe from 2030.`,

          description18:
            `Enceladus`,

          description19:
            `Almost similar to Europa, Saturn's icy moon concentrates all the criteria necessary for the development of life (liquid water, organic molecules, energy, stable environment). Thanks to the American probe Cassini, in orbit from 2004 to 2017, it was discovered the existence of geysers of water vapor, salt in plumes, organic elements, methane, CO2. There would therefore be contact between the pockets of liquid water and the core of this icy moon, as on Earth.`,

          description20:
            `For the moment, no mission has yet seen the light of day because of the irregular rhythm  of appearance of geysers.`,
          
          description21:
            `Titan`,

          description22:
            `Saturn is home to many surprises in terms of potential habitability criteria on another of its  "Titan" satellites. This other satellite of Saturn is indeed the only other place in the solar system where the atmosphere is composed of nitrogen and organic chemistry identical to Earth.`,
          
          description23:
            `However, Titan would be like an Earth in its earlydays. Indeed, there is water on this planet, but it seems trapped between two layers of ice unlike Europa and Enceladus. Who knows how long it will take for these ice sheets to melt. The layer delimiting the core of the water could be made thinner over time, allowing the water to come into contact with the rock of the core, a source of energy.`,
        
          },
        // {
        //   id: 2,
        //   img: require(`@/assets/images/blog/blog-post-2.jpg`),
        //   title: "Top 10 Toolkits for Deep Learning in 2022",
        //   commentor: "Santhan ",
        //   date: "14 January 2022",
        //   tag: `wordpress, business, economy, design`,
        //   description1:
        //     "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //   description2:
        //     "If you’ve been waiting for an invitation, this calligraphy is it. Commissioned by Notebook hand-lettered design for a poster. Quote is Notebook Building 8 VP’s Regina Dugan—and mine. ",
        //   description3:
        //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        //   description4:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // },
        // {
        //   id: 3,
        //   img: require(`@/assets/images/blog/blog-post-3.jpg`),
        //   title: "Everything You Need to Know About Web Accessibility",
        //   commentor: "steve ",
        //   date: "9 January 2020",
        //   tag: `wordpress, business, economy, design`,
        //   description1:
        //     "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //   description2:
        //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
        //   description3:
        //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        //   description4:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // },

        // {
        //   id: 4,
        //   img: require(`@/assets/images/blog/blog-post-4.jpg`),
        //   title: "How to Inject Humor & Comedy Into Your Brand",
        //   commentor: "Beker ",
        //   date: "15 March 2022",
        //   tag: `wordpress, business, economy, design`,
        //   description1:
        //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Suspendisse interdum consectetur libero id faucibu nisl. Lacus vel facilisis volutpat est velit egestas",
        //   description2:
        //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
        //   description3:
        //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        //   description4:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // },
        // {
        //   id: 5,
        //   img: require(`@/assets/images/blog/blog-post-5.jpg`),
        //   title: "Women in Web Design: How To Achieve Success",
        //   commentor: "Janntul ",
        //   date: "9 January 2021",
        //   tag: `wordpress, business, economy, design`,
        //   description1:
        //     "Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //   description2:
        //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
        //   description3:
        //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        //   description4:
        //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // },
        // {
        //   id: 6,
        //   img: require(`@/assets/images/blog/blog-post-6.jpg`),
        //   title: "Evergreen versus topical content: An overview",
        //   commentor: "Hasan ",
        //   date: "9 January 2022",
        //   tag: `wordpress, business, economy, design`,
        //   description1:
        //     "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //   description2:
        //     "Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights. ",
        //   description3:
        //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        //   description4:
        //     "Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        // },
      ],
    };
  },
};
