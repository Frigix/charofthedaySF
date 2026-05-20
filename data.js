const characters = [
    {
        key: 'Romulus Augustus',
        image: './img/chars/Romulus_Augustus.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Romulus_Augustus',
    },
    {
        key: 'Alf Merik',
        image: './img/chars/alf_merik.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Alf_Merik'
    },
    {
        key: 'ONE',
        image: './img/chars/ONE.webp'
    },  
    {
        key: 'Cynthia Fu-Wang',
        image: './img/chars/cynthia_fu-wang.webp'
    },  
    {
        key: 'Yamamoto Hitoshi',
        image: './img/chars/Hitoshi.webp'
    },  
    {
        key: 'Carly',
        image: './img/chars/shy-carly4.webp'
    },     
    {
        key: 'Hēdonḗ Tov Dragasès',
        image: './img/chars/Hedone.webp'
    },  
    {
        key: 'Rosschwarz',
        image: './img/chars/Rosschwarz.webp'
    },  
    {
        key: 'Jack le Somnambule',
        image: './img/chars/Jack-Butcher.webp'
    },  
    {
        key: 'Aletheia Diatiron',
        image: './img/chars/aletheia.webp'
    },       
    {
        key: 'Darvel Kreyfell',
        image: './img/chars/Darvel-Kreyfell.webp'
    },  
    {
        key: 'Sydney.exe',
        image: './img/chars/sydney.webp'
    },  
    {
        key: 'Kangourou-Man',
        image: './img/chars/KangourouMan.webp'
    },  
    {
        key: 'Gladio Gabrielem',
        image: './img/chars/Nameless_Hero.webp'
    },     
    {
        key: 'Roi Démon',
        image: './img/chars/BEAST_III_phase_1.webp'
    },  
    {
        key: 'Akihiko Mado',
        image: './img/chars/mado_but_real.webp'
    },  
    {
        key: 'Mr. Cool',
        image: './img/chars/mr_cool.webp'
    },  
    {
        key: 'Quang Minh',
        image: './img/chars/Quang.webp'
    },  
    {
        key: 'Énergivore',
        image: './img/chars/Energivore.webp'
    },  
    {
        key: 'Carl Gustav Jung',
        image: './img/chars/carl_jung.webp'
    },  
    {
        key: 'Looky',
        image: './img/chars/Looky_SF.webp'
    },   
    {
        key: 'Halcyon Zhinixa (Alternatif)',
        image: './img/chars/Pariston_Green.webp'
    },  
    {
        key: 'Tlacaelel',
        image: './img/chars/Tlacaelel.webp'
    },  
    {
        key: 'Morb\' Ligma von Mado',
        image: './img/chars/Morb_Ligma_von_Mado.webp'
    },  
    {
        key: 'Zehrentod Abhordritch',
        image: './img/chars/Zehrentod_Abhordritch.webp'
    },  
    {
        key: 'Young-Jae Bari',
        image: './img/chars/Young-Jae.webp'
    },  
    {
        key: 'Barlnab Jigmarie',
        image: './img/chars/Barlnab.webp'
    },  
    {
        key: 'Neco-Roi Démon',
        image: './img/chars/Demon-Arc_malicieux.webp'
    },  
    {
        key: 'Neco-Obama',
        image: './img/chars/Neco-Obama.webp'
    },   
    {
        key: 'Kim Il-sung',
        image: './img/chars/Kim_Il_Sung.webp'
    },  
    {
        key: 'Halcyon Zhinixa',
        image: './img/chars/ArtoriasCrypterCrown2.webp'
    },  
    {
        key: 'Aude de Diane-Andenne',
        image: './img/chars/Aude_de_Diane-Andenne(beta).webp'
    },  
    {
        key: 'Aude Neirflor de Diane-Andenne',
        image: './img/chars/Aude_de_Diane-Andenne_3(Dark_Timeline).webp'
    },       
    {
        key: 'Thomas Edison',
        image: './img/chars/Edison_Ascension_final_v2.png'
    },        
    {
        key: 'Hideyo Yamada',
        image: './img/chars/Hideyo_Yamada.png'
    }, 
    {
        key: 'Mun Bari',
        image: './img/chars/Moon2.webp'
    },   
    {
        key: 'Sigmund Freud',
        image: './img/chars/Sigmund_Freud.webp'
    }, 
    {
        key: 'Seonhwa Bari',
        image: './img/chars/Seonhwa_Bari.webp'
    }, 
    {
        key: 'Arthur Perry',
        image: './img/chars/CG_Arthur_hero.webp'
    }, 
    {
        key: 'Shibuma Haruki',
        image: './img/chars/haruki_7.webp'
    }, 
    {
        key: 'Suzuki Eichi',
        image: './img/chars/Eichi.webp'
    }, 
    {
        key: 'Jinzenji Kiyoka',
        image: './img/chars/KiyokaB.webp'
    }, 
    {
        key: 'Usuki Hoozuki',
        image: './img/chars/Hoozuki_1.webp'
    }, 
    {
        key: 'Ancien président de Hanabi School',
        image: './img/chars/OldPresident_3.webp'
    }, 
    {
        key: 'Wadahira Naomi',
        image: './img/chars/Naomi.webp'
    }, 
    {
        key: 'Atsutoyo Masamori',
        image: './img/chars/Masamori_2.webp'
    }, 
    {
        key: 'Sara Shōka',
        image: './img/chars/Sara.webp'
    },
    {
        key: 'Araragi Saito',
        image: './img/chars/prsident.webp'
    },   
    {
        key: 'Professeure Gonoji',
        image: './img/chars/Prof.webp'
    }, 
    {
        key: 'Ushirogami',
        image: './img/chars/Ushirogami.webp'
    },
    {
        key: 'Sydney Art',
        image: './img/chars/Sydney_1.webp'
    }, 
    {
        key: 'Ferrie',
        image: './img/chars/Ferrie.webp'
    }, 
    {
        key: 'Ateleas II Hephagos',
        image: './img/chars/Astea2transparent.webp'
    }, 
    {
        key: 'End of Oblivion',
        image: './img/chars/comm.webp'
    }, 
    {
        key: 'Icare',
        image: './img/chars/icare_transparent.webp'
    }, 
    {
        key: 'Yamada Kaguya',
        image: './img/chars/kaguya_transparente_rigolote.webp'
    }, 
    {
        key: 'Delix',
        image: './img/chars/Delix.webp'
    }, 
    {
        key: 'Le roi',
        image: './img/chars/Roi.webp'
    },  
    {
        key: 'Minotaure',
        image: './img/chars/Minotaur_1.webp'
    },  
    {
        key: 'Mimi',
        image: './img/chars/Mimi_1.webp'
    },  
    {
        key: 'Mado (DEDEDEDE)',
        image: './img/chars/Mado_1.webp'
    },  
    {
        key: 'Freddy Fazbear',
        image: './img/chars/FNFA.webp'
    },  
    {
        key: 'Azmos l\'Ace Célèste',
        image: './img/chars/Plane_1.webp'
    },  
    {
        key: 'Nerd',
        image: './img/chars/Wanted.webp'
    },  
    {
        key: 'Stellar Stella',
        image: './img/chars/Stellar_Stella_1.webp'
    },                                
    {
        key: 'Satan (Clockwork Onion)',
        image: './img/chars/Satan_1.webp'
    },    
    {
        key: 'Rature Ermura',
        image: './img/chars/Rature.webp'
    },    
    {
        key: 'Flere Celusveleri',
        image: './img/chars/FlereFIN2.webp'
    },    
    {
        key: 'Jeffrey Epstone',
        image: './img/chars/Epstone_1.webp'
    },    
    {
        key: 'Cosmic Cosmo',
        image: './img/chars/Cosmic_Cosmo_1.webp'
    },        
    {
        key: 'CARly',
        image: './img/chars/CarCarly1.webp'
    },    
    {
        key: 'Brandon Random',
        image: './img/chars/Brandon_Random_1.webp'
    },    
    {
        key: 'Clone Barack ObamaTe',
        image: './img/chars/Barack_Obama_Evil_3.webp'
    },    
    {
        key: 'Ange',
        image: './img/chars/Ange_1.webp'
    },    
    {
        key: 'Alexander Davros',
        image: './img/chars/Alexander_1.webp'
    },    
    {
        key: 'Jerryster',
        image: './img/chars/Jerryster.webp'
    },    
    {
        key: 'Arthurheim Vanirion',
        image: './img/chars/Arthurheim1.webp'
    },    
    {
        key: 'Amongusaurus',
        image: './img/chars/Amongusaurus_reel.webp'
    },    
    {
        key: 'Jerry',
        image: './img/chars/Jerry.webp'
    },                              
   {
        key: 'Egir Ranpak',
        image: './img/chars/abyss.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Egir_Ranpak',
    },
   {
        key: 'Edgie (Chaussette)',
        image: './img/chars/edgie le vrai.png',
    },
   {
        key: 'Liam Aebischer',
        image: './img/chars/employedumois.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Liam_Aebischer',
    },
   {
        key: 'Chiminigagua (Âge des Dieux)',
        image: './img/chars/Chimi.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Chiminigagua',
    },
   {
        key: 'Luxia don Mado',
        image: './img/chars/Luxia_don_Mado.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Luxia_don_Mado',
    },
   {
        key: 'Garry Flunch',
        image: './img/chars/Garry_Flunch.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Garry_Flunch',
    },
   {
        key: 'Alex Heisenberg',
        image: './img/chars/Blue_Rose.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Alex_Heisenberg',
    },
   {
        key: 'Rika Yoshihara',
        image: './img/chars/Rika.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Rika_Yoshihara',
    },
   {
        key: 'Gramoriana Visconte',
        image: './img/chars/Gramoriana_Visconte.png',
    },
   {
        key: 'Chao Liu',
        image: './img/chars/Chao_Liu.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Chao_Liu',
    },
   {
        key: 'Gabriel P. Price',
        image: './img/chars/Gabriel avec ailes.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Gabriel P. Price',
    },
   {
        key: 'Cryo Reaper',
        image: './img/chars/Cryo_Reaper.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Cryo_Reaper',
    },
   {
        key: 'Shidare-no-Miya Yanagihito',
        image: './img/chars/Yanagi.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Shidare-no-Miya_Yanagihito',
    },
   {
        key: 'Olga Koshkyn',
        image: './img/chars/Olga.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Olga_Koshkyn',
    },
   {
        key: 'Ivan',
        image: './img/chars/Ivan.jpeg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Ivan',
    },
   {
        key: 'Su-Cheol Bari',
        image: './img/chars/su-cheol.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Su-Cheol_Bari',
    },
   {
        key: 'Asume Koimoto',
        image: './img/chars/Asume_Koimoto.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Asume_Koimoto',
    },
   {
        key: 'Buster K.',
        image: './img/chars/Buster.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Buster_K.',
    },
   {
        key: 'Anastasie Sophia Baphomet',
        image: './img/chars/Anastasie4.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Anastasie_Baphomet',
    },
   {
        key: 'Debbie',
        image: './img/chars/Debbie.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Debbie',
    },
   {
        key: 'Vanita Parlombra Oralistra',
        image: './img/chars/vanita.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Vanita_Parlombra_Oralistra',
    },
   {
        key: 'Sujita Hina',
        image: './img/chars/sujita_hina.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Sujita_Hina',
    },
   {
        key: 'Steven Candish',
        image: './img/chars/steven_candish.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Steven_Candish',
    },
   {
        key: 'Kirino Lee',
        image: './img/chars/Kirino_Lee.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Kirino_Lee',
    },
   {
        key: 'Federica von Madomeister-Hoffmann',
        image: './img/chars/Morb_Jr_wow.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Federica_von_Madomeister-Hoffmann',
    },
   {
        key: 'Carlito',
        image: './img/chars/CARLITO2.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Carlito',
    },
   {
        key: 'Aldegrin de Pairaud',
        image: './img/chars/Aldegrin.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Aldegrin_de_Pairaud',
    },
   {
        key: 'Frigix (Ancient Sands)',
        image: './img/chars/FrigixAS.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Frigix_(Ancient_Sands)',
    },
   {
        key: 'Jonn II Malop',
        image: './img/chars/jonn_2_malop.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Jonn_II_Malop',
    },
   {
        key: 'Eleonóra Ahrozný',
        image: './img/chars/eleonora.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Eleonóra_Ahrozný',
    },
   {
        key: 'Rister',
        image: './img/chars/Rister.png',
    },
   {
        key: 'Amelia',
        image: './img/chars/Amelia.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Amelia',
    },
   {
        key: 'Liam “Justin” Life',
        image: './img/chars/liam_life.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Liam_Life',
    },
   {
        key: 'Louis Sarkozy',
        image: './img/chars/louis_sarkozy.png',
    },
   {
        key: 'Antonio Celerán',
        image: './img/chars/pretty_boy.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Antonio_Celerán',
    },
   {
        key: 'Alastasia Prismane Velestor',
        image: './img/chars/prismane.jpg',
    },
   {
        key: 'El Caballero',
        image: './img/chars/el_caballero.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/El_Caballero',
    },
   {
        key: 'Luke Raymonde',
        image: './img/chars/Luke_Raymonde.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Luke_Raymonde',
    },
   {
        key: 'Lilith Newgate',
        image: './img/chars/Lilith_Newgate.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Lilith_Newgate',
    },
   {
        key: 'Spielberg K.',
        image: './img/chars/spil.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Spielberg_K.',
    },
   {
        key: 'Sam Lee',
        image: './img/chars/Sam_Lee.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Sam_Lee',
    },
   {
        key: 'Baghi',
        image: './img/chars/baghi.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Baghi',
    },
   {
        key: 'Carlitwo',
        image: './img/chars/Carlitwo.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Carlitwo',
    },
   {
        key: 'Louvre Lagamme',
        image: './img/chars/louvre_magius.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Louvre_Lagamme',
    },
   {
        key: 'Aruki Ren',
        image: './img/chars/Aruki_Ren.jpg',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Aruki_Ren',
    },
    {
        key: 'Hana Trump & Spencer Mill',
        image: './img/chars/hana_et_spencer.png',
    },
    {
        key: 'Chiminigagua (End Of Freebies)',
        image: './img/chars/Chiminigagua_(End_Of_Freebies).webp',
    },
    {
        key: 'David Timaeus Valdamjong',
        image: './img/chars/David_Timaeus_Valdamjong.webp',
    },
    {
        key: 'Evil McEvil',
        image: './img/chars/Evil_McEvil.webp',
    },
    {
        key: 'Ezekiel von Madomeister',
        image: './img/chars/Ezekiel_von_Madomeister.webp',
    },
    {
        key: 'Garzaleus Richardios (le Rédempteur)',
        image: './img/chars/Garzaleus_Richardios_(le_Rédempteur).webp',
    },
    {
        key: 'Ghetis von Mado',
        image: './img/chars/Ghetis_von_Mado.webp',
    },
    {
        key: 'Gola Betelgeuse Schwarzschild',
        image: './img/chars/Gola_Betelgeuse_Schwarzschild.webp',
    },
    {
        key: 'Isabella (Absolute Annihilation)',
        image: './img/chars/Isabella_(Absolute_Annihilation).webp',
    },
    {
        key: 'Le Professeur',
        image: './img/chars/Le_Professeur.webp',
    },
    {
        key: 'Lex Diapason Harmonia',
        image: './img/chars/Lex_Diapason_Harmonia.webp',
    },
    {
        key: 'M4-D0',
        image: './img/chars/M4-D0.webp',
    },
    {
        key: 'Melie Melo',
        image: './img/chars/Melie_Melo.webp',
    },
    {
        key: 'Michalis II von_Mado',
        image: './img/chars/Michalis_II_von_Mado.webp',
    },
    {
        key: 'Ningen Et Anthropologos (Human.)',
        image: './img/chars/Ningen_Et_Anthropologos_(Human.).webp',
    },
    {
        key: 'Tulipia',
        image: './img/chars/Tulipia.webp',
    },
   {
        key: 'Akaten (Ancient Sands)',
        image: './img/chars/Akaten_AS.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Akaten_(Ancient_Sands)',
    },
   {
        key: 'Alex Hangyaku',
        image: './img/chars/Alex.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Alex_Hangyaku',
    },
   {
        key: 'Allure Rapide',
        image: './img/chars/Allure_Rapide.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Allure_Rapide',
    },
   {
        key: 'Amadea Mado',
        image: './img/chars/Amadea_Mado.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Amadea_Mado_(Dark_Timeline)',
    },
   {
        key: 'Argon IV Obratz',
        image: './img/chars/The_Liaison.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Argon_IV_Obratz',
    },
   {
        key: 'Argon Obratz',
        image: './img/chars/Argon_Obratz.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Argon_Obratz',
    },
   {
        key: 'Astea',
        image: './img/chars/Astea.png',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Astea',
    },
   {
        key: 'Ateleas Hephagos',
        image: './img/chars/Ateleas_I.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Ateleas_Hephagos',
    },
   {
        key: 'Aurora Elaytalia',
        image: './img/chars/Aurora_Elaytalia.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Aurora_Elaytalia',
    },
   {
        key: 'Bailong Jayasawal',
        image: './img/chars/Bailong_Jayasawal.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Bailong_Jayasawal',
    },
   {
        key: 'Cage Siya',
        image: './img/chars/Cage_Siya.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Cage_Siya',
    },
   {
        key: 'Chasle de Neuilly von Mado',
        image: './img/chars/ChasledeNeuillyvonMado.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Chasle_de_Neuilly_von_Mado',
    },
   {
        key: 'Chelsea Crawford',
        image: './img/chars/Chelsea.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Chelsea_Crawford',
    },
   {
        key: 'Emmanuel Besnier',
        image: './img/chars/Besnier.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Emmanuel_Besnier',
    },
   {
        key: 'Dead Vicinity',
        image: './img/chars/DeadVicinity.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Kanya_Ritchanok',
    },
   {
        key: 'Kim Il-sung (Rider)',
        image: './img/chars/U-Olga.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Kim_Il-sung_(Rider)',
    },
   {
        key: 'Lapine Lunaire',
        image: './img/chars/lapine_lunaire.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Lapine_Lunaire',
    },
   {
        key: 'Loxley Wayne',
        image: './img/chars/Loxley_Wayne.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Loxley_Wayne',
    },
   {
        key: 'Lucie Boulanger',
        image: './img/chars/LucieBoulanger.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Lucie_Boulanger',
    },
   {
        key: 'Luraedron',
        image: './img/chars/Draedon.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Luraedron',
    },
   {
        key: 'MADO',
        image: './img/chars/MADO.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/MADO',
    },
   {
        key: 'Marianne von Mado',
        image: './img/chars/Marianne_von_Mado.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Marianne_von_Mado',
    },
   {
        key: 'Matthew Linegramm',
        image: './img/chars/Matthew_Linegramm.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Matthew_Linegramm',
    },
   {
        key: 'Miguel Almavida',
        image: './img/chars/Miguel_Almavida.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Miguel_Almavida',
    },
   {
        key: 'Mizuki Ryoko',
        image: './img/chars/Mizuki.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Mizuki_Ryoko',
    },
   {
        key: 'Nikiah Roi (Chaos Timeline)',
        image: './img/chars/Ni_Roi_Chaos_Timeline.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Nikiah_Roi_(Chaos_Timeline)',
    },
   {
        key: 'Pagius Pangeux',
        image: './img/chars/Pagius.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Pagius_Pangeux',
    },
   {
        key: 'Pandora Genesis',
        image: './img/chars/PandoraGenesis.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Pandora_Genesis',
    },
   {
        key: 'Raven Lostlake',
        image: './img/chars/RavenLostlake.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Raven_Lostlake',
    },
   {
        key: 'Ray Fladeron',
        image: './img/chars/Ray_don_Mado.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Ray_Fladeron',
    },
   {
        key: 'Rodion Vassiliévitch',
        image: './img/chars/RodionVassilievitch.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Rodion_Vassiliévitch',
    },
   {
        key: 'Ruby Rose',
        image: './img/chars/Ruby_Rose_fille.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Ruby_Rose_(Ritter)',
    },
   {
        key: 'Thérésa Newgate',
        image: './img/chars/Enemy_The_Herta.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Thérésa_Newgate',
    },
   {
        key: 'Zarathustra',
        image: './img/chars/Zarathustra.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Zarathustra',
    },
   {
        key: 'Zenevo Giullare',
        image: './img/chars/Zenevo.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Zenevo_Giullare',
    },
    {
        key: 'Élise Bonacieu',
        image: './img/chars/Elise.webp',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Élise_Bonacieu',
    },
    {
        key: 'Ahtleyāōtl',
        image: './img/chars/Ahtleyaotl.png'
    },
    {
        key: 'Laurent Bouhours',
        image: './img/chars/Laurent_Bouhours.png'
    },
    {
        key: 'Ashley Fishenchips',
        image: './img/chars/Ashley_Fishenchips.jpg'
    },
    {
        key: 'Lyra d\'Eon Laschtlock',
        image: './img/chars/Lyra_d\'Eon_Laschtlock.png'
    },
    {
        key: 'Cels d\'Eon Laschtlock',
        image: './img/chars/Celis_d\'Eon_Laschtlock.png'
    },
    {
        key: 'Naraku Nirami',
        image: './img/chars/Naraku_Nirami.jpg'
    },
    {
        key: 'Edeweiss d\'Eon',
        image: './img/chars/Edelweiss_d\'Eon.png'
    },
    {
        key: 'Natacha De Lisle',
        image: './img/chars/Natacha_de_Lisle.jpg'
    },
    {
        key: 'Ibis D\'Eon Laschtlock',
        image: './img/chars/Ibis_d\'Eon_Laschtlock.png'
    },
    {
        key: 'Pan Twardowski',
        image: './img/chars/Pan_Twardowski.png'
    },
    {
        key: 'James Seer',
        image: './img/chars/James_Seer.jpg'
    },
    {
        key: 'Sakigami Enko',
        image: './img/chars/Sakigami_Enko.jpg'
    },
    {
        key: 'Kamil Twardowski',
        image: './img/chars/Kamil_Twardowski.jpg'
    },
    {
        key: 'Cerise Noire',
        image: './img/chars/Cerise_Noire.png'
    },
    {
        key: "Abbas Al Muttalib",
        image: "./img/chars/Abbas_al_Muttalib.png"
    },
    {
        key: "Acheron",
        image: "./img/chars/Acheron.jpg"
    },
    {
        key: "Adelheid Von Dresch",
        image: "./img/chars/Adelheid_von_Dresch.webp"
    },
    {
        key: "Agate De La Souche",
        image: "./img/chars/Agate_de_la_Souche.jpg"
    },
    {
        key: "Agnòs Hayyim",
        image: "./img/chars/Agnòs_Hayyim.jpg"
    },
    {
        key: "Aliénor Trencart",
        image: "./img/chars/Aliénor_Trencart.jpg"
    },
    {
        key: "Angelus (Fake)",
        image: "./img/chars/Angelus_(Fake).png"
    },
    {
        key: "Banania",
        image: "./img/chars/Banania.jpg"
    },
    {
        key: "Bionicle De Colress",
        image: "./img/chars/Bionicle_de_Colress.png"
    },
    {
        key: "Cassandra B",
        image: "./img/chars/Cassandra_B.png"
    },
    {
        key: "Cecil Murphy",
        image: "./img/chars/Cecil_Murphy.png"
    },
    {
        key: "Charon Bladdyd",
        image: "./img/chars/Charon_Bladdyd.webp"
    },
    {
        key: "Cichol Mado",
        image: "./img/chars/Cichol_Mado.jpg"
    },
    {
        key: "Cichol Mado (Clockwork Onion)",
        image: "./img/chars/Cichol_Mado_(Clockwork_Onion).png"
    },
    {
        key: "Claude Van Der Bladd.",
        image: "./img/chars/Claude_van_der_Bladd..jpg"
    },
    {
        key: "Cocytus Von Mado",
        image: "./img/chars/Cocytus_von_Mado.jpg"
    },
    {
        key: "Colress Van Damo",
        image: "./img/chars/Colress_van_Damo.png"
    },
    {
        key: "Conrad Gropius",
        image: "./img/chars/Conrad_Gropius.png"
    },
    {
        key: "Curiosité",
        image: "./img/chars/Curiosité.jpg"
    },
    {
        key: "Daniel Boreas Il Mosmania",
        image: "./img/chars/Daniel_Boreas__Il_Mosmania.png"
    },
    {
        key: "Dendris I.M",
        image: "./img/chars/Dendris_I.M.jpg"
    },
    {
        key: "Dorothée Al Esthner",
        image: "./img/chars/Dorothée_Al_Esthner.png"
    },
    {
        key: "Désirée",
        image: "./img/chars/Désirée.png"
    },
    {
        key: "Eber B.",
        image: "./img/chars/Eber_B..jpg"
    },
    {
        key: "Eber B. (Dark Timeline)",
        image: "./img/chars/Eber_B._(Dark_Timeline).jpg"
    },
    {
        key: "Eden Bladdyd",
        image: "./img/chars/Eden_Bladdyd.webp"
    },
    {
        key: "Edgelord Bladdyd",
        image: "./img/chars/Edgelord_Bladdyd.jpg"
    },
    {
        key: "Edgie Bladdyd",
        image: "./img/chars/Edgie_Bladdyd.jpg"
    },
    {
        key: "Edgie Bladdyd (F)",
        image: "./img/chars/Edgie_Bladdyd_(F).jpg"
    },
    {
        key: "Edith Murphy",
        image: "./img/chars/Edith_Murphy.png"
    },
    {
        key: "Edric Bladdyd",
        image: "./img/chars/Edric_Bladdyd.jpg"
    },
    {
        key: "Edric Bladdyd (Canopus)",
        image: "./img/chars/Edric_Bladdyd_(Canopus).jpg"
    },
    {
        key: "Elohim Hayyim",
        image: "./img/chars/Elohim_Hayyim.jpg"
    },
    {
        key: "Emma Rancher",
        image: "./img/chars/Emma_Rancher.png"
    },
    {
        key: "Enrique Murphy",
        image: "./img/chars/Enrique_Murphy.jpg"
    },
    {
        key: "Ernest Mc. Murphy",
        image: "./img/chars/Ernest_Mc.Murphy.webp"
    },
    {
        key: "Gregson Murphy",
        image: "./img/chars/Gregson_Murphy.webp"
    },
    {
        key: "Grietje Baas",
        image: "./img/chars/Grietje_Baas.webp"
    },
    {
        key: "Gros Caillou",
        image: "./img/chars/Gros_Caillou.webp"
    },
    {
        key: "Gustav Gropius",
        image: "./img/chars/Gustav_Gropius.webp"
    },
    {
        key: "Hermengarde d'Orléans",
        image: "./img/chars/Hermengarde_d'Orléans.webp"
    },
    {
        key: "Icare Bladdyd",
        image: "./img/chars/Icare_Bladdyd.webp"
    },
    {
        key: "Izod de la Souche",
        image: "./img/chars/Izod_de_la_Souche.png"
    },
    {
        key: "Javier de la Vera",
        image: "./img/chars/Javier_de_la_Vera.png"
    },
    {
        key: "Jordan Souks",
        image: "./img/chars/Jordan_Souks.webp"
    },
    {
        key: "Josette Bernard",
        image: "./img/chars/Josette_Bernard.jpg"
    },
    {
        key: "Josh Blackmore",
        image: "./img/chars/Josh_Blackmore.png"
    },
    {
        key: "Jésus Le Christ",
        image: "./img/chars/Jésus_Le_Christ.jpg"
    },
    {
        key: "Karton",
        image: "./img/chars/Karton.png"
    },
    {
        key: "Klaus Bladdyd",
        image: "./img/chars/Klaus_Bladdyd.jpg"
    },
    {
        key: "L'Architecte",
        image: "./img/chars/L'Architecte.jpg"
    },
    {
        key: "Lethe Bari",
        image: "./img/chars/Lethe_Bari.webp"
    },
    {
        key: "Le Maître",
        image: "./img/chars/Le_Maître.jpg"
    },
    {
        key: "Liroy Kwol",
        image: "./img/chars/Liroy_Kwol.jpg"
    },
    {
        key: "Lora Bladud",
        image: "./img/chars/Lora_Bladud.png"
    },
    {
        key: "Luigi De Luigi",
        image: "./img/chars/Luigi_DeLuigi.png"
    },
    {
        key: "Medeo Gropius",
        image: "./img/chars/Medeo_Gropius.webp"
    },
    {
        key: "Mein Führer",
        image: "./img/chars/Mein_Führer.jpg"
    },
    {
        key: "Mike Literus",
        image: "./img/chars/Mike_Literus.jpg"
    },
    {
        key: "Mike Oxhuge",
        image: "./img/chars/Mike_Oxhuge.webp"
    },
    {
        key: "Mélinoë",
        image: "./img/chars/Mélinoë.jpg"
    },
    {
        key: "Niamh van der Bladd.",
        image: "./img/chars/Niamh_van_der_Bladd..png"
    },
    {
        key: "Nocta Calvador",
        image: "./img/chars/Nocta_Calvador.png"
    },
    {
        key: "Oiemouth",
        image: "./img/chars/Oiemouth.png"
    },
    {
        key: "Omega Lothbrok",
        image: "./img/chars/Omega_Lothbrok.png"
    },
    {
        key: "Oursmouth",
        image: "./img/chars/Oursmouth.png"
    },
    {
        key: "Pasquale il Nazzareno",
        image: "./img/chars/Pasquale_il_Nazzareno.webp"
    },
    {
        key: "Phlegethon Art",
        image: "./img/chars/Phlegethon_Art.webp"
    },
    {
        key: "Project Adam",
        image: "./img/chars/Project_Adam.webp"
    },
    {
        key: "Raiko Fujiwase",
        image: "./img/chars/Raiko_Fujiwase.png"
    },
    {
        key: "Raymond Carpentier",
        image: "./img/chars/Raymond_Carpentier.jpg"
    },
    {
        key: "Seth",
        image: "./img/chars/Seth.png"
    },
    {
        key: "Silvio Aggravato (Dark Timeline)",
        image: "./img/chars/Silvio_Aggravato_(Dark_Timeline).webp"
    },
    {
        key: "Styx Jonn",
        image: "./img/chars/Styx_Jonn.jpg"
    },
    {
        key: "Vandham Bladdyd",
        image: "./img/chars/Vandham_Bladdyd.webp"
    },
    {
        key: "Venina Barbieri",
        image: "./img/chars/Venina_Barbieri.webp"
    },
    {
        key: "Vermouth",
        image: "./img/chars/Vermouth.png"
    },
    {
        key: "William Huncherton",
        image: "./img/chars/William_Huncherton.webp"
    },
    {
        key: "Yorkmouth",
        image: "./img/chars/Yorkmouth.png"
    },
    { 
        key: "Charlotte",
        image: "./img/chars/Charlotte.png"
    },
    { 
        key: "Fabio da Costa",
        image: "./img/chars/Fabio_da_Costa.webp"
    },
    { 
        key: "Le Corbeau",
        image: "./img/chars/Le_Corbeau.png"
    },
    { 
        key: "Nari Ha",
        image: "./img/chars/Nari_Ha.jpg"
    },                                                                                                                      
    { 
        key: "Sunbaeg",
        image: "./img/chars/Sunbaeg.jpg"
    },
    { 
        key: "Yeon-ae Kiseu",
        image: "./img/chars/Yeon-ae_Kiseu.png"
    },
    { 
        key: "Yu Geoul",
        image: "./img/chars/Yu_Geoul.jpg"
    },
    {
        key: "Akari Hishko",
        image: "./img/chars/Akari_Hishko.png"
    },
    {
        key: "Amatsuyu Solaire",
        image: "./img/chars/Amatsuyu_Solaire.png"
    },
    {
        key: "Apophis",
        image: "./img/chars/Apophis.png"
    },
    {
        key: "Apophis (Humanoïde)",
        image: "./img/chars/Apophis_(Humanoïde).png"
    },
    {
        key: "Astley Nice Traïe",
        image: "./img/chars/Astley_Nice_Traïe.png"
    },
    {
        key: "Barack Obama",
        image: "./img/chars/Barack_Obama.png"
    },
    {
        key: "Candice Art",
        image: "./img/chars/Candice_Art.png"
    },
    {
        key: "Charon (Festival Timeline)",
        image: "./img/chars/Charon_(Festival_Timeline).webp"
    },
    {
        key: "Courtney Art",
        image: "./img/chars/Courtney_Art.png"                                                                                                                 
    },
    {
        key: "Courtsey Art",
        image: "./img/chars/Courtsey_Art.png"
    },
    {
        key: "Dustin Dwight",
        image: "./img/chars/Dustin_Dwight.png"
    },
    {
        key: "E. Dark (F)",
        image: "./img/chars/E._Dark_(F).png"
    },
    {
        key: "E. Dark (H)",
        image: "./img/chars/E._Dark_(H).jpg"
    },
    {
        key: "Elise Light",
        image: "./img/chars/Elise_Light.png"
    },
    {
        key: "Empyrean",
        image: "./img/chars/Empyrean.png"
    },
    {
        key: "End of End of Dreams",
        image: "./img/chars/End_of_End_of_Dreams.png"
    },
    {
        key: "Gog et Magog",
        image: "./img/chars/Gog_et_Magog.png"
    },
    {
        key: "HEX(4a)",
        image: "./img/chars/HEX(4a).jpg"
    },
    {
        key: "JEREMY Art (Festival Timeline)",
        image: "./img/chars/JEREMY_Art_(Festival_Timeline).png"
    },
    {
        key: "Kevl Art",
        image: "./img/chars/Kevl_Art.png"
    },
    {
        key: "Le Clown Art",
        image: "./img/chars/Le_Clown_Art.png"
    },
    {
        key: "Le Clown Art (Idol)",
        image: "./img/chars/Le_Clown_Art_(Idol).png"
    },
    {
        key: "Le_Dragon_Mécanique, Exécuteur de l’Apocalypse Totale",
        image: "./img/chars/Le_Dragon_Mécanique,_Exécuteur_de_l’Apocalypse_Totale.png"
    },
    {
        key: "Le Fictionnaliste",
        image: "./img/chars/Le_Fictionnaliste.png"
    },
    {
        key: "Le PROTOTYPE",
        image: "./img/chars/Le_PROTOTYPE.png"
    },
    {
        key: "Le PROTOTYPE (Festival Timeline)",
        image: "./img/chars/Le_PROTOTYPE_(Festival_Timeline).png"
    },
    {
        key: "Le rat Art",
        image: "./img/chars/Le_rat_Art.png"                                                                                                                   
    },
    {
        key: "Le singe Art",
        image: "./img/chars/Le_singe_Art.png"
    },
    {
        key: "Lunl",
        image: "./img/chars/Lunl.png"
    },
    {
        key: "LYA",
        image: "./img/chars/LYA.png"
    },
    {
        key: "Lénig Art",
        image: "./img/chars/Lénig_Art.png"
    },
    {
        key: "Madht",
        image: "./img/chars/Madht.png"
    },
    {
        key: "Malab Art",
        image: "./img/chars/Malab_Art.png"
    },
    {
        key: "Maria NewArt",
        image: "./img/chars/Maria_NewArt.png"
    },
    {
        key: "Null Art",
        image: "./img/chars/Null_Art.jpg"
    },
    {
        key: "Null Art (Festival Timeline)",
        image: "./img/chars/Null_Art_(Festival_Timeline).png"
    },
    {
        key: "Null Art (Love)",
        image: "./img/chars/Null_Art_(Love).png"
    },
    {
        key: "PoFr3",
        image: "./img/chars/PoFr3.png"
    },
    {
        key: "Préxée Art",
        image: "./img/chars/Préxée_Art.png"
    },
    {
        key: "Red Art",
        image: "./img/chars/Red_Art.png"
    },
    {
        key: "Remp Art",
        image: "./img/chars/Remp_Art.png"
    },
    {
        key: "Rick Astley",
        image: "./img/chars/Rick_Astley.png"
    },
    {
        key: "Rosa Garcia",
        image: "./img/chars/Rosa_Garcia.png"
    },
    {
        key: "Steve Nickel Chrome Jobs",
        image: "./img/chars/Steve_Nickel_Chrome_Jobs.png"                                                                                                     
    },
    {
        key: "Sushika Hishko",
        image: "./img/chars/Sushika_Hishko.png"
    },
    {
        key: "Trick Art",
        image: "./img/chars/Trick_Art.png"
    },
    {
        key: "V. Art",
        image: "./img/chars/V._Art.png"
    },
    {
        key: "Xi Jinping",
        image: "./img/chars/Xi_Jinping.png"
    },
    {
        key: "Abe no Rei",
        image: "./img/chars/Abe_no_Rei.webp"
    },
    {
        key: "Akame Johnson Lewis",
        image: "./img/chars/Akame_Johnson_Lewis.webp"
    },
    {
        key: "Annabella Christensen",
        image: "./img/chars/Annabella_Christensen.webp"
    },
    {
        key: "Archer of Huaraz",
        image: "./img/chars/Archer_of_Huaraz.webp"
    },
    {
        key: "Assassin of Huaraz",
        image: "./img/chars/Assassin_of_Huaraz.webp"                                                                                                          
    },
    {
        key: "Berserker of Huaraz",
        image: "./img/chars/Berserker_of_Huaraz.webp"
    },
    {
        key: "Caster of Huaraz",
        image: "./img/chars/Caster_of_Huaraz.webp"
    },
    {
        key: "Ermynthrude Kaiser Eichelberger",
        image: "./img/chars/Ermynthrude_Kaiser_Eichelberger.webp"
    },
    {
        key: "Freida Kaiser Eichelberger",
        image: "./img/chars/Freida_Kaiser_Eichelberger.webp"
    },
    {
        key: "Goldwyn Kaiser Eichelberger",
        image: "./img/chars/Goldwyn_Kaiser_Eichelberger.webp"
    },
    {
        key: "Hansen Christensen",
        image: "./img/chars/Hansen_Christensen.webp"
    },
    {
        key: "James Nullah Robinson",
        image: "./img/chars/James_Nullah_Robinson.webp"
    },
    {
        key: "Johann Georg Faust VIII",
        image: "./img/chars/Johann_Georg_Faust_VIII.webp"
    },
    {
        key: "Jumeau",
        image: "./img/chars/Jumeau.webp"
    },
    {
        key: "Jumelle",
        image: "./img/chars/Jumelle.webp"
    },
    {
        key: "Karoline Kaiser Eichelberger",
        image: "./img/chars/Karoline_Kaiser_Eichelberger.webp"                                                                                                
    },
    {
        key: "Konrad Kyeser",
        image: "./img/chars/Konrad_Kyeser.webp"
    },
    {
        key: "Kṣitigarbha",
        image: "./img/chars/Kṣitigarbha.webp"
    },
    {
        key: "Lancer of Huaraz",
        image: "./img/chars/Lancer_of_Huaraz.webp"
    },
    {
        key: "La Femme mystérieuse",
        image: "./img/chars/La_Femme_mystérieuse.webp"
    },
    {
        key: "Marie-Anna_von_Mado",
        image: "./img/chars/Marie-Anna_von_Mado.webp"
    },
    {
        key: "Mynoghra (Sainte_Barbara)",
        image: "./img/chars/Mynoghra_(Sainte_Barbara).webp"
    },
    {
        key: "Nashoba",
        image: "./img/chars/Nashoba.webp"
    },
    {
        key: "Nyarlathotep (Dr._Mabuse)",
        image: "./img/chars/Nyarlathotep_(Dr._Mabuse).webp"
    },
    {
        key: "Orla Kaiser Eichelberger",
        image: "./img/chars/Orla_Kaiser_Eichelberger.webp"
    },
    {
        key: "Oscar Isaac Zoroastre Ambroise Diggs",
        image: "./img/chars/Oscar_Isaac_Zoroastre_Ambroise_Diggs.webp"                                                                                        
    },
    {
        key: "Paul Francis Kennedy",
        image: "./img/chars/Paul_Francis_Kennedy.webp"
    },
    {
        key: "Rider of Huaraz",
        image: "./img/chars/Rider_of_Huaraz.webp"
    },
    {
        key: "Rito del Rosario Majorana",
        image: "./img/chars/Rito_del_Rosario_Majorana.webp"
    },
    {
        key: "Saber of Huaraz",
        image: "./img/chars/Saber_of_Huaraz.webp"
    },
    {
        key: "Svenja Kaiser Eichelberger",
        image: "./img/chars/Svenja_Kaiser_Eichelberger.webp"
    },
    {
        key: "Takako Miki",
        image: "./img/chars/Takako_Miki.webp"
    },
    {
        key: "Xanthe Löwenstein-Wertheim",
        image: "./img/chars/Xanthe_Löwenstein-Wertheim.webp"
    },
    {
        key: "Yang Xiao Long",
        image: "./img/chars/Yang_Xiao_Long.webp"
    },
    {
        key: "Épicure",
        image: "./img/chars/Épicure.webp"
    },
]
