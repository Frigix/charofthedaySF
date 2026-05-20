const characters = [
    {
        name: 'Romulus Augustus',
        image: './img/chars/Romulus_Augustus.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Romulus_Augustus',
    },
    {
        name: 'Alf Merik',
        image: './img/chars/alf_merik.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Alf_Merik'
    },
    {
        name: 'ONE',
        image: './img/chars/ONE.webp'
    },  
    {
        name: 'Cynthia Fu-Wang',
        image: './img/chars/cynthia_fu-wang.webp'
    },  
    {
        name: 'Yamamoto Hitoshi',
        image: './img/chars/Hitoshi.webp'
    },  
    {
        name: 'Carly',
        image: './img/chars/shy-carly4.webp'
    },     
    {
        name: 'Hēdonḗ Tov Dragasès',
        image: './img/chars/Hedone.webp'
    },  
    {
        name: 'Rosschwarz',
        image: './img/chars/Rosschwarz.webp'
    },  
    {
        name: 'Jack le Somnambule',
        image: './img/chars/Jack-Butcher.webp'
    },  
    {
        name: 'Aletheia Diatiron',
        image: './img/chars/aletheia.webp'
    },       
    {
        name: 'Darvel Kreyfell',
        image: './img/chars/Darvel-Kreyfell.webp'
    },  
    {
        name: 'Sydney.exe',
        image: './img/chars/sydney.webp'
    },  
    {
        name: 'Kangourou-Man',
        image: './img/chars/KangourouMan.webp'
    },  
    {
        name: 'Gladio Gabrielem',
        image: './img/chars/Nameless_Hero.webp'
    },     
    {
        name: 'Roi Démon',
        image: './img/chars/BEAST_III_phase_1.webp'
    },  
    {
        name: 'Akihiko Mado',
        image: './img/chars/mado_but_real.webp'
    },  
    {
        name: 'Mr. Cool',
        image: './img/chars/mr_cool.webp'
    },  
    {
        name: 'Quang Minh',
        image: './img/chars/Quang.webp'
    },  
    {
        name: 'Énergivore',
        image: './img/chars/Energivore.webp'
    },  
    {
        name: 'Carl Gustav Jung',
        image: './img/chars/carl_jung.webp'
    },  
    {
        name: 'Looky',
        image: './img/chars/Looky_SF.webp'
    },   
    {
        name: 'Halcyon Zhinixa (Alternatif)',
        image: './img/chars/Pariston_Green.webp'
    },  
    {
        name: 'Tlacaelel',
        image: './img/chars/Tlacaelel.webp'
    },  
    {
        name: 'Morb\' Ligma von Mado',
        image: './img/chars/Morb_Ligma_von_Mado.webp'
    },  
    {
        name: 'Zehrentod Abhordritch',
        image: './img/chars/Zehrentod_Abhordritch.webp'
    },  
    {
        name: 'Young-Jae Bari',
        image: './img/chars/Young-Jae.webp'
    },  
    {
        name: 'Barlnab Jigmarie',
        image: './img/chars/Barlnab.webp'
    },  
    {
        name: 'Neco-Roi Démon',
        image: './img/chars/Demon-Arc_malicieux.webp'
    },  
    {
        name: 'Neco-Obama',
        image: './img/chars/Neco-Obama.webp'
    },   
    {
        name: 'Kim Il-sung',
        image: './img/chars/Kim_Il_Sung.webp'
    },  
    {
        name: 'Halcyon Zhinixa',
        image: './img/chars/ArtoriasCrypterCrown2.webp'
    },  
    {
        name: 'Aude de Diane-Andenne',
        image: './img/chars/Aude_de_Diane-Andenne(beta).webp'
    },  
    {
        name: 'Aude Neirflor de Diane-Andenne',
        image: './img/chars/Aude_de_Diane-Andenne_3(Dark_Timeline).webp'
    },       
    {
        name: 'Thomas Edison',
        image: './img/chars/Edison_Ascension_final_v2.png'
    },        
    {
        name: 'Hideyo Yamada',
        image: './img/chars/Hideyo_Yamada.png'
    }, 
    {
        name: 'Mun Bari',
        image: './img/chars/Moon2.webp'
    },   
    {
        name: 'Sigmund Freud',
        image: './img/chars/Sigmund_Freud.webp'
    }, 
    {
        name: 'Seonhwa Bari',
        image: './img/chars/Seonhwa_Bari.webp'
    }, 
    {
        name: 'Arthur Perry',
        image: './img/chars/CG_Arthur_hero.webp'
    }, 
    {
        name: 'Shibuma Haruki',
        image: './img/chars/haruki_7.webp'
    }, 
    {
        name: 'Suzuki Eichi',
        image: './img/chars/Eichi.webp'
    }, 
    {
        name: 'Jinzenji Kiyoka',
        image: './img/chars/KiyokaB.webp'
    }, 
    {
        name: 'Usuki Hoozuki',
        image: './img/chars/Hoozuki_1.webp'
    }, 
    {
        name: 'Ancien président de Hanabi School',
        image: './img/chars/OldPresident_3.webp'
    }, 
    {
        name: 'Wadahira Naomi',
        image: './img/chars/Naomi.webp'
    }, 
    {
        name: 'Atsutoyo Masamori',
        image: './img/chars/Masamori_2.webp'
    }, 
    {
        name: 'Sara Shōka',
        image: './img/chars/Sara.webp'
    },
    {
        name: 'Araragi Saito',
        image: './img/chars/prsident.webp'
    },   
    {
        name: 'Professeure Gonoji',
        image: './img/chars/Prof.webp'
    }, 
    {
        name: 'Ushirogami',
        image: './img/chars/Ushirogami.webp'
    },
    {
        name: 'Sydney Art',
        image: './img/chars/Sydney_1.webp'
    }, 
    {
        name: 'Ferrie',
        image: './img/chars/Ferrie.webp'
    }, 
    {
        name: 'Ateleas II Hephagos',
        image: './img/chars/Astea2transparent.webp'
    }, 
    {
        name: 'End of Oblivion',
        image: './img/chars/comm.webp'
    }, 
    {
        name: 'Icare',
        image: './img/chars/icare_transparent.webp'
    }, 
    {
        name: 'Yamada Kaguya',
        image: './img/chars/kaguya_transparente_rigolote.webp'
    }, 
    {
        name: 'Delix',
        image: './img/chars/Delix.webp'
    }, 
    {
        name: 'Le roi',
        image: './img/chars/Roi.webp'
    },  
    {
        name: 'Minotaure',
        image: './img/chars/Minotaur_1.webp'
    },  
    {
        name: 'Mimi',
        image: './img/chars/Mimi_1.webp'
    },  
    {
        name: 'Mado (DEDEDEDE)',
        image: './img/chars/Mado_1.webp'
    },  
    {
        name: 'Freddy Fazbear',
        image: './img/chars/FNFA.webp'
    },  
    {
        name: 'Azmos l\'Ace Célèste',
        image: './img/chars/Plane_1.webp'
    },  
    {
        name: 'Nerd',
        image: './img/chars/Wanted.webp'
    },  
    {
        name: 'Stellar Stella',
        image: './img/chars/Stellar_Stella_1.webp'
    },                                
    {
        name: 'Satan (Clockwork Onion)',
        image: './img/chars/Satan_1.webp'
    },    
    {
        name: 'Rature Ermura',
        image: './img/chars/Rature.webp'
    },    
    {
        name: 'Flere Celusveleri',
        image: './img/chars/FlereFIN2.webp'
    },    
    {
        name: 'Jeffrey Epstone',
        image: './img/chars/Epstone_1.webp'
    },    
    {
        name: 'Cosmic Cosmo',
        image: './img/chars/Cosmic_Cosmo_1.webp'
    },        
    {
        name: 'CARly',
        image: './img/chars/CarCarly1.webp'
    },    
    {
        name: 'Brandon Random',
        image: './img/chars/Brandon_Random_1.webp'
    },    
    {
        name: 'Clone Barack ObamaTe',
        image: './img/chars/Barack_Obama_Evil_3.webp'
    },    
    {
        name: 'Ange',
        image: './img/chars/Ange_1.webp'
    },    
    {
        name: 'Alexander Davros',
        image: './img/chars/Alexander_1.webp'
    },    
    {
        name: 'Jerryster',
        image: './img/chars/Jerryster.webp'
    },    
    {
        name: 'Arthurheim Vanirion',
        image: './img/chars/Arthurheim1.webp'
    },    
    {
        name: 'Amongusaurus',
        image: './img/chars/Amongusaurus_reel.webp'
    },    
    {
        name: 'Jerry',
        image: './img/chars/Jerry.webp'
    },                              
   {
        name: 'Egir Ranpak',
        image: './img/chars/abyss.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Egir_Ranpak',
    },
   {
        name: 'Edgie (Chaussette)',
        image: './img/chars/edgie le vrai.png',
    },
   {
        name: 'Liam Aebischer',
        image: './img/chars/employedumois.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Liam_Aebischer',
    },
   {
        name: 'Chiminigagua (Âge des Dieux)',
        image: './img/chars/Chimi.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Chiminigagua',
    },
   {
        name: 'Luxia don Mado',
        image: './img/chars/Luxia_don_Mado.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Luxia_don_Mado',
    },
   {
        name: 'Garry Flunch',
        image: './img/chars/Garry_Flunch.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Garry_Flunch',
    },
   {
        name: 'Alex Heisenberg',
        image: './img/chars/Blue_Rose.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Alex_Heisenberg',
    },
   {
        name: 'Rika Yoshihara',
        image: './img/chars/Rika.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Rika_Yoshihara',
    },
   {
        name: 'Gramoriana Visconte',
        image: './img/chars/Gramoriana_Visconte.png',
    },
   {
        name: 'Chao Liu',
        image: './img/chars/Chao_Liu.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Chao_Liu',
    },
   {
        name: 'Gabriel P. Price',
        image: './img/chars/Gabriel avec ailes.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Gabriel P. Price',
    },
   {
        name: 'Cryo Reaper',
        image: './img/chars/Cryo_Reaper.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Cryo_Reaper',
    },
   {
        name: 'Shidare-no-Miya Yanagihito',
        image: './img/chars/Yanagi.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Shidare-no-Miya_Yanagihito',
    },
   {
        name: 'Olga Koshkyn',
        image: './img/chars/Olga.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Olga_Koshkyn',
    },
   {
        name: 'Ivan',
        image: './img/chars/Ivan.jpeg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Ivan',
    },
   {
        name: 'Su-Cheol Bari',
        image: './img/chars/su-cheol.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Su-Cheol_Bari',
    },
   {
        name: 'Asume Koimoto',
        image: './img/chars/Asume_Koimoto.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Asume_Koimoto',
    },
   {
        name: 'Buster K.',
        image: './img/chars/Buster.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Buster_K.',
    },
   {
        name: 'Anastasie Sophia Baphomet',
        image: './img/chars/Anastasie4.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Anastasie_Baphomet',
    },
   {
        name: 'Debbie',
        image: './img/chars/Debbie.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Debbie',
    },
   {
        name: 'Vanita Parlombra Oralistra',
        image: './img/chars/vanita.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Vanita_Parlombra_Oralistra',
    },
   {
        name: 'Sujita Hina',
        image: './img/chars/sujita_hina.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Sujita_Hina',
    },
   {
        name: 'Steven Candish',
        image: './img/chars/steven_candish.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Steven_Candish',
    },
   {
        name: 'Kirino Lee',
        image: './img/chars/Kirino_Lee.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Kirino_Lee',
    },
   {
        name: 'Federica von Madomeister-Hoffmann',
        image: './img/chars/Morb_Jr_wow.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Federica_von_Madomeister-Hoffmann',
    },
   {
        name: 'Carlito',
        image: './img/chars/CARLITO2.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Carlito',
    },
   {
        name: 'Aldegrin de Pairaud',
        image: './img/chars/Aldegrin.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Aldegrin_de_Pairaud',
    },
   {
        name: 'Frigix (Ancient Sands)',
        image: './img/chars/FrigixAS.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Frigix_(Ancient_Sands)',
    },
   {
        name: 'Jonn II Malop',
        image: './img/chars/jonn_2_malop.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Jonn_II_Malop',
    },
   {
        name: 'Eleonóra Ahrozný',
        image: './img/chars/eleonora.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Eleonóra_Ahrozný',
    },
   {
        name: 'Rister',
        image: './img/chars/Rister.png',
    },
   {
        name: 'Amelia',
        image: './img/chars/Amelia.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Amelia',
    },
   {
        name: 'Liam “Justin” Life',
        image: './img/chars/liam_life.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Liam_Life',
    },
   {
        name: 'Louis Sarkozy',
        image: './img/chars/louis_sarkozy.png',
    },
   {
        name: 'Antonio Celerán',
        image: './img/chars/pretty_boy.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Antonio_Celerán',
    },
   {
        name: 'Alastasia Prismane Velestor',
        image: './img/chars/prismane.jpg',
    },
   {
        name: 'El Caballero',
        image: './img/chars/el_caballero.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/El_Caballero',
    },
   {
        name: 'Luke Raymonde',
        image: './img/chars/Luke_Raymonde.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Luke_Raymonde',
    },
   {
        name: 'Lilith Newgate',
        image: './img/chars/Lilith_Newgate.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Lilith_Newgate',
    },
   {
        name: 'Spielberg K.',
        image: './img/chars/spil.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Spielberg_K.',
    },
   {
        name: 'Sam Lee',
        image: './img/chars/Sam_Lee.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Sam_Lee',
    },
   {
        name: 'Baghi',
        image: './img/chars/baghi.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Baghi',
    },
   {
        name: 'Carlitwo',
        image: './img/chars/Carlitwo.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Carlitwo',
    },
   {
        name: 'Louvre Lagamme',
        image: './img/chars/louvre_magius.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Louvre_Lagamme',
    },
   {
        name: 'Aruki Ren',
        image: './img/chars/Aruki_Ren.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Aruki_Ren',
    },
    {
        name: 'Hana Trump & Spencer Mill',
        image: './img/chars/hana_et_spencer.png',
    },
    {
        name: 'Chiminigagua (End Of Freebies)',
        image: './img/chars/Chiminigagua_(End_Of_Freebies).webp',
    },
    {
        name: 'David Timaeus Valdamjong',
        image: './img/chars/David_Timaeus_Valdamjong.webp',
    },
    {
        name: 'Evil McEvil',
        image: './img/chars/Evil_McEvil.webp',
    },
    {
        name: 'Ezekiel von Madomeister',
        image: './img/chars/Ezekiel_von_Madomeister.webp',
    },
    {
        name: 'Garzaleus Richardios (le Rédempteur)',
        image: './img/chars/Garzaleus_Richardios_(le_Rédempteur).webp',
    },
    {
        name: 'Ghetis von Mado',
        image: './img/chars/Ghetis_von_Mado.webp',
    },
    {
        name: 'Gola Betelgeuse Schwarzschild',
        image: './img/chars/Gola_Betelgeuse_Schwarzschild.webp',
    },
    {
        name: 'Isabella (Absolute Annihilation)',
        image: './img/chars/Isabella_(Absolute_Annihilation).webp',
    },
    {
        name: 'Le Professeur',
        image: './img/chars/Le_Professeur.webp',
    },
    {
        name: 'Lex Diapason Harmonia',
        image: './img/chars/Lex_Diapason_Harmonia.webp',
    },
    {
        name: 'M4-D0',
        image: './img/chars/M4-D0.webp',
    },
    {
        name: 'Melie Melo',
        image: './img/chars/Melie_Melo.webp',
    },
    {
        name: 'Michalis II von_Mado',
        image: './img/chars/Michalis_II_von_Mado.webp',
    },
    {
        name: 'Ningen Et Anthropologos (Human.)',
        image: './img/chars/Ningen_Et_Anthropologos_(Human.).webp',
    },
    {
        name: 'Tulipia',
        image: './img/chars/Tulipia.webp',
    },
   {
        name: 'Akaten (Ancient Sands)',
        image: './img/chars/Akaten_AS.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Akaten_(Ancient_Sands)',
    },
   {
        name: 'Alex Hangyaku',
        image: './img/chars/Alex.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Alex_Hangyaku',
    },
   {
        name: 'Allure Rapide',
        image: './img/chars/Allure_Rapide.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Allure_Rapide',
    },
   {
        name: 'Amadea Mado',
        image: './img/chars/Amadea_Mado.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Amadea_Mado_(Dark_Timeline)',
    },
   {
        name: 'Argon IV Obratz',
        image: './img/chars/The_Liaison.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Argon_IV_Obratz',
    },
   {
        name: 'Argon Obratz',
        image: './img/chars/Argon_Obratz.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Argon_Obratz',
    },
   {
        name: 'Astea',
        image: './img/chars/Astea.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Astea',
    },
   {
        name: 'Ateleas Hephagos',
        image: './img/chars/Ateleas_I.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Ateleas_Hephagos',
    },
   {
        name: 'Aurora Elaytalia',
        image: './img/chars/Aurora_Elaytalia.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Aurora_Elaytalia',
    },
   {
        name: 'Bailong Jayasawal',
        image: './img/chars/Bailong_Jayasawal.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Bailong_Jayasawal',
    },
   {
        name: 'Cage Siya',
        image: './img/chars/Cage_Siya.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Cage_Siya',
    },
   {
        name: 'Chasle de Neuilly von Mado',
        image: './img/chars/ChasledeNeuillyvonMado.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Chasle_de_Neuilly_von_Mado',
    },
   {
        name: 'Chelsea Crawford',
        image: './img/chars/Chelsea.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Chelsea_Crawford',
    },
   {
        name: 'Emmanuel Besnier',
        image: './img/chars/Besnier.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Emmanuel_Besnier',
    },
   {
        name: 'Dead Vicinity',
        image: './img/chars/DeadVicinity.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Kanya_Ritchanok',
    },
   {
        name: 'Kim Il-sung (Rider)',
        image: './img/chars/U-Olga.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Kim_Il-sung_(Rider)',
    },
   {
        name: 'Lapine Lunaire',
        image: './img/chars/lapine_lunaire.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Lapine_Lunaire',
    },
   {
        name: 'Loxley Wayne',
        image: './img/chars/Loxley_Wayne.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Loxley_Wayne',
    },
   {
        name: 'Lucie Boulanger',
        image: './img/chars/LucieBoulanger.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Lucie_Boulanger',
    },
   {
        name: 'Luraedron',
        image: './img/chars/Draedon.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Luraedron',
    },
   {
        name: 'MADO',
        image: './img/chars/MADO.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/MADO',
    },
   {
        name: 'Marianne von Mado',
        image: './img/chars/Marianne_von_Mado.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Marianne_von_Mado',
    },
   {
        name: 'Matthew Linegramm',
        image: './img/chars/Matthew_Linegramm.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Matthew_Linegramm',
    },
   {
        name: 'Miguel Almavida',
        image: './img/chars/Miguel_Almavida.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Miguel_Almavida',
    },
   {
        name: 'Mizuki Ryoko',
        image: './img/chars/Mizuki.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Mizuki_Ryoko',
    },
   {
        name: 'Nikiah Roi (Chaos Timeline)',
        image: './img/chars/Ni_Roi_Chaos_Timeline.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Nikiah_Roi_(Chaos_Timeline)',
    },
   {
        name: 'Pagius Pangeux',
        image: './img/chars/Pagius.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Pagius_Pangeux',
    },
   {
        name: 'Pandora Genesis',
        image: './img/chars/PandoraGenesis.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Pandora_Genesis',
    },
   {
        name: 'Raven Lostlake',
        image: './img/chars/RavenLostlake.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Raven_Lostlake',
    },
   {
        name: 'Ray Fladeron',
        image: './img/chars/Ray_don_Mado.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Ray_Fladeron',
    },
   {
        name: 'Rodion Vassiliévitch',
        image: './img/chars/RodionVassilievitch.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Rodion_Vassiliévitch',
    },
   {
        name: 'Ruby Rose',
        image: './img/chars/Ruby_Rose_fille.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Ruby_Rose_(Ritter)',
    },
   {
        name: 'Thérésa Newgate',
        image: './img/chars/Enemy_The_Herta.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Thérésa_Newgate',
    },
   {
        name: 'Zarathustra',
        image: './img/chars/Zarathustra.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Zarathustra',
    },
   {
        name: 'Zenevo Giullare',
        image: './img/chars/Zenevo.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Zenevo_Giullare',
    },
    {
        name: 'Élise Bonacieu',
        image: './img/chars/Elise.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Élise_Bonacieu',
    },
    {
        name: 'Ahtleyāōtl',
        image: './img/chars/Ahtleyaotl.png'
    },
    {
        name: 'Laurent Bouhours',
        image: './img/chars/Laurent_Bouhours.png'
    },
    {
        name: 'Ashley Fishenchips',
        image: './img/chars/Ashley_Fishenchips.jpg'
    },
    {
        name: 'Lyra d\'Eon Laschtlock',
        image: './img/chars/Lyra_d\'Eon_Laschtlock.png'
    },
    {
        name: 'Cels d\'Eon Laschtlock',
        image: './img/chars/Celis_d\'Eon_Laschtlock.png'
    },
    {
        name: 'Naraku Nirami',
        image: './img/chars/Naraku_Nirami.jpg'
    },
    {
        name: 'Edeweiss d\'Eon',
        image: './img/chars/Edelweiss_d\'Eon.png'
    },
    {
        name: 'Natacha De Lisle',
        image: './img/chars/Natacha_de_Lisle.jpg'
    },
    {
        name: 'Ibis D\'Eon Laschtlock',
        image: './img/chars/Ibis_d\'Eon_Laschtlock.png'
    },
    {
        name: 'Pan Twardowski',
        image: './img/chars/Pan_Twardowski.png'
    },
    {
        name: 'James Seer',
        image: './img/chars/James_Seer.jpg'
    },
    {
        name: 'Sakigami Enko',
        image: './img/chars/Sakigami_Enko.jpg'
    },
    {
        name: 'Kamil Twardowski',
        image: './img/chars/Kamil_Twardowski.jpg'
    },
    {
        name: 'Cerise Noire',
        image: './img/chars/Cerise_Noire.png'
    },
    {
        name: "Abbas Al Muttalib",
        image: "./img/chars/Abbas_al_Muttalib.png"
    },
    {
        name: "Acheron",
        image: "./img/chars/Acheron.jpg"
    },
    {
        name: "Adelheid Von Dresch",
        image: "./img/chars/Adelheid_von_Dresch.webp"
    },
    {
        name: "Agate De La Souche",
        image: "./img/chars/Agate_de_la_Souche.jpg"
    },
    {
        name: "Agnòs Hayyim",
        image: "./img/chars/Agnòs_Hayyim.jpg"
    },
    {
        name: "Aliénor Trencart",
        image: "./img/chars/Aliénor_Trencart.jpg"
    },
    {
        name: "Angelus (Fake)",
        image: "./img/chars/Angelus_(Fake).png"
    },
    {
        name: "Banania",
        image: "./img/chars/Banania.jpg"
    },
    {
        name: "Bionicle De Colress",
        image: "./img/chars/Bionicle_de_Colress.png"
    },
    {
        name: "Cassandra B",
        image: "./img/chars/Cassandra_B.png"
    },
    {
        name: "Cecil Murphy",
        image: "./img/chars/Cecil_Murphy.png"
    },
    {
        name: "Charon Bladdyd",
        image: "./img/chars/Charon_Bladdyd.webp"
    },
    {
        name: "Cichol Mado",
        image: "./img/chars/Cichol_Mado.jpg"
    },
    {
        name: "Cichol Mado (Clockwork Onion)",
        image: "./img/chars/Cichol_Mado_(Clockwork_Onion).png"
    },
    {
        name: "Claude Van Der Bladd.",
        image: "./img/chars/Claude_van_der_Bladd..jpg"
    },
    {
        name: "Cocytus Von Mado",
        image: "./img/chars/Cocytus_von_Mado.jpg"
    },
    {
        name: "Colress Van Damo",
        image: "./img/chars/Colress_van_Damo.png"
    },
    {
        name: "Conrad Gropius",
        image: "./img/chars/Conrad_Gropius.png"
    },
    {
        name: "Curiosité",
        image: "./img/chars/Curiosité.jpg"
    },
    {
        name: "Daniel Boreas Il Mosmania",
        image: "./img/chars/Daniel_Boreas__Il_Mosmania.png"
    },
    {
        name: "Dendris I.M",
        image: "./img/chars/Dendris_I.M.jpg"
    },
    {
        name: "Dorothée Al Esthner",
        image: "./img/chars/Dorothée_Al_Esthner.png"
    },
    {
        name: "Désirée",
        image: "./img/chars/Désirée.png"
    },
    {
        name: "Eber B.",
        image: "./img/chars/Eber_B..jpg"
    },
    {
        name: "Eber B. (Dark Timeline)",
        image: "./img/chars/Eber_B._(Dark_Timeline).jpg"
    },
    {
        name: "Eden Bladdyd",
        image: "./img/chars/Eden_Bladdyd.webp"
    },
    {
        name: "Edgelord Bladdyd",
        image: "./img/chars/Edgelord_Bladdyd.jpg"
    },
    {
        name: "Edgie Bladdyd",
        image: "./img/chars/Edgie_Bladdyd.jpg"
    },
    {
        name: "Edgie Bladdyd (F)",
        image: "./img/chars/Edgie_Bladdyd_(F).jpg"
    },
    {
        name: "Edith Murphy",
        image: "./img/chars/Edith_Murphy.png"
    },
    {
        name: "Edric Bladdyd",
        image: "./img/chars/Edric_Bladdyd.jpg"
    },
    {
        name: "Edric Bladdyd (Canopus)",
        image: "./img/chars/Edric_Bladdyd_(Canopus).jpg"
    },
    {
        name: "Elohim Hayyim",
        image: "./img/chars/Elohim_Hayyim.jpg"
    },
    {
        name: "Emma Rancher",
        image: "./img/chars/Emma_Rancher.png"
    },
    {
        name: "Enrique Murphy",
        image: "./img/chars/Enrique_Murphy.jpg"
    },
    {
        name: "Ernest Mc. Murphy",
        image: "./img/chars/Ernest_Mc.Murphy.webp"
    },
    {
        name: "Gregson Murphy",
        image: "./img/chars/Gregson_Murphy.webp"
    },
    {
        name: "Grietje Baas",
        image: "./img/chars/Grietje_Baas.webp"
    },
    {
        name: "Gros Caillou",
        image: "./img/chars/Gros_Caillou.webp"
    },
    {
        name: "Gustav Gropius",
        image: "./img/chars/Gustav_Gropius.webp"
    },
    {
        name: "Hermengarde d'Orléans",
        image: "./img/chars/Hermengarde_d'Orléans.webp"
    },
    {
        name: "Icare Bladdyd",
        image: "./img/chars/Icare_Bladdyd.webp"
    },
    {
        name: "Izod de la Souche",
        image: "./img/chars/Izod_de_la_Souche.png"
    },
    {
        name: "Javier de la Vera",
        image: "./img/chars/Javier_de_la_Vera.png"
    },
    {
        name: "Jordan Souks",
        image: "./img/chars/Jordan_Souks.webp"
    },
    {
        name: "Josette Bernard",
        image: "./img/chars/Josette_Bernard.jpg"
    },
    {
        name: "Josh Blackmore",
        image: "./img/chars/Josh_Blackmore.png"
    },
    {
        name: "Jésus Le Christ",
        image: "./img/chars/Jésus_Le_Christ.jpg"
    },
    {
        name: "Karton",
        image: "./img/chars/Karton.png"
    },
    {
        name: "Klaus Bladdyd",
        image: "./img/chars/Klaus_Bladdyd.jpg"
    },
    {
        name: "L'Architecte",
        image: "./img/chars/L'Architecte.jpg"
    },
    {
        name: "Lethe Bari",
        image: "./img/chars/Lethe_Bari.webp"
    },
    {
        name: "Le Maître",
        image: "./img/chars/Le_Maître.jpg"
    },
    {
        name: "Liroy Kwol",
        image: "./img/chars/Liroy_Kwol.jpg"
    },
    {
        name: "Lora Bladud",
        image: "./img/chars/Lora_Bladud.png"
    },
    {
        name: "Luigi De Luigi",
        image: "./img/chars/Luigi_DeLuigi.png"
    },
    {
        name: "Medeo Gropius",
        image: "./img/chars/Medeo_Gropius.webp"
    },
    {
        name: "Mein Führer",
        image: "./img/chars/Mein_Führer.jpg"
    },
    {
        name: "Mike Literus",
        image: "./img/chars/Mike_Literus.jpg"
    },
    {
        name: "Mike Oxhuge",
        image: "./img/chars/Mike_Oxhuge.webp"
    },
    {
        name: "Mélinoë",
        image: "./img/chars/Mélinoë.jpg"
    },
    {
        name: "Niamh van der Bladd.",
        image: "./img/chars/Niamh_van_der_Bladd..png"
    },
    {
        name: "Nocta Calvador",
        image: "./img/chars/Nocta_Calvador.png"
    },
    {
        name: "Oiemouth",
        image: "./img/chars/Oiemouth.png"
    },
    {
        name: "Omega Lothbrok",
        image: "./img/chars/Omega_Lothbrok.png"
    },
    {
        name: "Oursmouth",
        image: "./img/chars/Oursmouth.png"
    },
    {
        name: "Pasquale il Nazzareno",
        image: "./img/chars/Pasquale_il_Nazzareno.webp"
    },
    {
        name: "Phlegethon Art",
        image: "./img/chars/Phlegethon_Art.webp"
    },
    {
        name: "Project Adam",
        image: "./img/chars/Project_Adam.webp"
    },
    {
        name: "Raiko Fujiwase",
        image: "./img/chars/Raiko_Fujiwase.png"
    },
    {
        name: "Raymond Carpentier",
        image: "./img/chars/Raymond_Carpentier.jpg"
    },
    {
        name: "Seth",
        image: "./img/chars/Seth.png"
    },
    {
        name: "Silvio Aggravato (Dark Timeline)",
        image: "./img/chars/Silvio_Aggravato_(Dark_Timeline).webp"
    },
    {
        name: "Styx Jonn",
        image: "./img/chars/Styx_Jonn.jpg"
    },
    {
        name: "Vandham Bladdyd",
        image: "./img/chars/Vandham_Bladdyd.webp"
    },
    {
        name: "Venina Barbieri",
        image: "./img/chars/Venina_Barbieri.webp"
    },
    {
        name: "Vermouth",
        image: "./img/chars/Vermouth.png"
    },
    {
        name: "William Huncherton",
        image: "./img/chars/William_Huncherton.webp"
    },
    {
        name: "Yorkmouth",
        image: "./img/chars/Yorkmouth.png"
    },
    { 
        name: "Charlotte",
        image: "./img/chars/Charlotte.png"
    },
    { 
        name: "Fabio da Costa",
        image: "./img/chars/Fabio_da_Costa.webp"
    },
    { 
        name: "Le Corbeau",
        image: "./img/chars/Le_Corbeau.png"
    },
    { 
        name: "Nari Ha",
        image: "./img/chars/Nari_Ha.jpg"
    },                                                                                                                      
    { 
        name: "Sunbaeg",
        image: "./img/chars/Sunbaeg.jpg"
    },
    { 
        name: "Yeon-ae Kiseu",
        image: "./img/chars/Yeon-ae_Kiseu.png"
    },
    { 
        name: "Yu Geoul",
        image: "./img/chars/Yu_Geoul.jpg"
    },
    {
        name: "Akari Hishko",
        image: "./img/chars/Akari_Hishko.png"
    },
    {
        name: "Amatsuyu Solaire",
        image: "./img/chars/Amatsuyu_Solaire.png"
    },
    {
        name: "Apophis",
        image: "./img/chars/Apophis.png"
    },
    {
        name: "Apophis (Humanoïde)",
        image: "./img/chars/Apophis_(Humanoïde).png"
    },
    {
        name: "Astley Nice Traïe",
        image: "./img/chars/Astley_Nice_Traïe.png"
    },
    {
        name: "Barack Obama",
        image: "./img/chars/Barack_Obama.png"
    },
    {
        name: "Candice Art",
        image: "./img/chars/Candice_Art.png"
    },
    {
        name: "Charon (Festival Timeline)",
        image: "./img/chars/Charon_(Festival_Timeline).webp"
    },
    {
        name: "Courtney Art",
        image: "./img/chars/Courtney_Art.png"                                                                                                                 
    },
    {
        name: "Courtsey Art",
        image: "./img/chars/Courtsey_Art.png"
    },
    {
        name: "Dustin Dwight",
        image: "./img/chars/Dustin_Dwight.png"
    },
    {
        name: "E. Dark (F)",
        image: "./img/chars/E._Dark_(F).png"
    },
    {
        name: "E. Dark (H)",
        image: "./img/chars/E._Dark_(H).jpg"
    },
    {
        name: "Elise Light",
        image: "./img/chars/Elise_Light.png"
    },
    {
        name: "Empyrean",
        image: "./img/chars/Empyrean.png"
    },
    {
        name: "End of End of Dreams",
        image: "./img/chars/End_of_End_of_Dreams.png"
    },
    {
        name: "Gog et Magog",
        image: "./img/chars/Gog_et_Magog.png"
    },
    {
        name: "HEX(4a)",
        image: "./img/chars/HEX(4a).jpg"
    },
    {
        name: "JEREMY Art (Festival Timeline)",
        image: "./img/chars/JEREMY_Art_(Festival_Timeline).png"
    },
    {
        name: "Kevl Art",
        image: "./img/chars/Kevl_Art.png"
    },
    {
        name: "Le Clown Art",
        image: "./img/chars/Le_Clown_Art.png"
    },
    {
        name: "Le Clown Art (Idol)",
        image: "./img/chars/Le_Clown_Art_(Idol).png"
    },
    {
        name: "Le_Dragon_Mécanique, Exécuteur de l’Apocalypse Totale",
        image: "./img/chars/Le_Dragon_Mécanique,_Exécuteur_de_l’Apocalypse_Totale.png"
    },
    {
        name: "Le Fictionnaliste",
        image: "./img/chars/Le_Fictionnaliste.png"
    },
    {
        name: "Le PROTOTYPE",
        image: "./img/chars/Le_PROTOTYPE.png"
    },
    {
        name: "Le PROTOTYPE (Festival Timeline)",
        image: "./img/chars/Le_PROTOTYPE_(Festival_Timeline).png"
    },
    {
        name: "Le rat Art",
        image: "./img/chars/Le_rat_Art.png"                                                                                                                   
    },
    {
        name: "Le singe Art",
        image: "./img/chars/Le_singe_Art.png"
    },
    {
        name: "Lunl",
        image: "./img/chars/Lunl.png"
    },
    {
        name: "LYA",
        image: "./img/chars/LYA.png"
    },
    {
        name: "Lénig Art",
        image: "./img/chars/Lénig_Art.png"
    },
    {
        name: "Madht",
        image: "./img/chars/Madht.png"
    },
    {
        name: "Malab Art",
        image: "./img/chars/Malab_Art.png"
    },
    {
        name: "Maria NewArt",
        image: "./img/chars/Maria_NewArt.png"
    },
    {
        name: "Null Art",
        image: "./img/chars/Null_Art.jpg"
    },
    {
        name: "Null Art (Festival Timeline)",
        image: "./img/chars/Null_Art_(Festival_Timeline).png"
    },
    {
        name: "Null Art (Love)",
        image: "./img/chars/Null_Art_(Love).png"
    },
    {
        name: "PoFr3",
        image: "./img/chars/PoFr3.png"
    },
    {
        name: "Préxée Art",
        image: "./img/chars/Préxée_Art.png"
    },
    {
        name: "Red Art",
        image: "./img/chars/Red_Art.png"
    },
    {
        name: "Remp Art",
        image: "./img/chars/Remp_Art.png"
    },
    {
        name: "Rick Astley",
        image: "./img/chars/Rick_Astley.png"
    },
    {
        name: "Rosa Garcia",
        image: "./img/chars/Rosa_Garcia.png"
    },
    {
        name: "Steve Nickel Chrome Jobs",
        image: "./img/chars/Steve_Nickel_Chrome_Jobs.png"                                                                                                     
    },
    {
        name: "Sushika Hishko",
        image: "./img/chars/Sushika_Hishko.png"
    },
    {
        name: "Trick Art",
        image: "./img/chars/Trick_Art.png"
    },
    {
        name: "V. Art",
        image: "./img/chars/V._Art.png"
    },
    {
        name: "Xi Jinping",
        image: "./img/chars/Xi_Jinping.png"
    },
]
