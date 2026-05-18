const characters = [
    {
        name: 'Romulus Augustus',
        image: './img/chars/Romulus_Augustus',
        wiki: 'https://servantfarm.fandom.com/fr/wiki/Romulus_Augustus',
    },
    {
        name: 'Alf Merik',
        image: './img/chars/al_merik.webp',
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
        image: './img/chars/Hitoshi.webpc'
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
        name: 'Seth',
        image: './img/chars/Seth_5.webp'
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
        image: './img/chars/Cyro_Reaper.png',
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
        image: './img/chars/steven_candish.png',
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
    }
]
