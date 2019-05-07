(() => {
    const hero = {
        name: 'name',
        level: 1,
        experience: 0,
        maxHP: 100,
        HP: 100,
        weapon: 0,
        flasks: 3,
        gold: 0,
        html: document.querySelector('.hero'),
        img: 'img/heores/knight_',
    }
    const moobs = [{
        name: 'chest empty',
        img: 'img/chest/chest_',
        experience: 0,
    }, {
        name: 'chest full',
        img: 'img/chest/chest_full_',
        experience: 0,
    }, {
        name: 'goblin',
        img: 'img/moobs/goblin_',
        HP: 35,
        minDamage: 0,
        maxDamage: 4,
        experience: 10,
    }, {
        name: 'imp',
        img: 'img/moobs/imp_',
        HP: 30,
        minDamage: 2,
        maxDamage: 6,
        experience: 12,
    }, {
        name: 'tiny zombie',
        img: 'img/moobs/tiny_zombie_',
        HP: 40,
        minDamage: 0,
        maxDamage: 4,
        experience: 10,
    }, {
        name: 'muddy',
        img: 'img/moobs/muddy_',
        HP: 60,
        minDamage: 2,
        maxDamage: 7,
        experience: 15,
    }, {
        name: 'swampy',
        img: 'img/moobs/swampy_',
        HP: 65,
        minDamage: 2,
        maxDamage: 7,
        experience: 15,
    }, {
        name: 'skelet',
        img: 'img/moobs/skelet_',
        HP: 110,
        minDamage: 3,
        maxDamage: 6,
        experience: 20,
    }, {
        name: 'zombie',
        img: 'img/moobs/zombie_',
        HP: 100,
        minDamage: 2,
        maxDamage: 7,
        experience: 20,
    }, {
        name: 'ice zombie',
        img: 'img/moobs/ice_zombie_',
        HP: 110,
        minDamage: 2,
        maxDamage: 8,
        experience: 30,
    }, {
        name: 'orc warrior',
        img: 'img/moobs/orc_warrior_',
        HP: 150,
        minDamage: 0,
        maxDamage: 10,
        experience: 32,
    }, {
        name: 'masked orc',
        img: 'img/moobs/masked_orc_',
        HP: 160,
        minDamage: 2,
        maxDamage: 15,
        experience: 40,
    }, {
        name: 'orc shaman',
        img: 'img/moobs/orc_shaman_',
        HP: 170,
        minDamage: 5,
        maxDamage: 12,
        experience: 40,
    }, {
        name: 'chort',
        img: 'img/moobs/chort_',
        HP: 130,
        minDamage: 0,
        maxDamage: 20,
        experience: 40,
    }, {
        name: 'necromancer',
        img: 'img/moobs/necromancer_',
        HP: 140,
        minDamage: 5,
        maxDamage: 20,
        experience: 45,
    }, {
        name: 'ogre',
        img: 'img/moobs/ogre_',
        HP: 500,
        minDamage: 4,
        maxDamage: 17,
        experience: 45,
    }, {
        name: 'big demon',
        img: 'img/moobs/big_demon_',
        HP: 500,
        minDamage: 4,
        maxDamage: 17,
        experience: 45,
    }, {
        name: 'big zombie',
        img: 'img/moobs/big_zombie_',
        HP: 500,
        minDamage: 4,
        maxDamage: 17,
        experience: 45,
    }]

    const weapons = [{
        name: 'knife',
        minDamage: 1,
        maxDamage: 3,
        price: 0,
        src: 'img/weapons/knife.png',
    }, {
        name: 'club with spikes',
        minDamage: 2,
        maxDamage: 5,
        price: 10,
        src: 'img/weapons/club_with_spikes.png',
    }, {
        name: 'claver',
        minDamage: 3,
        maxDamage: 5,
        price: 20,
        src: 'img/weapons/cleaver.png',
    }, {
        name: 'machete',
        minDamage: 3,
        maxDamage: 6,
        price: 25,
        src: 'img/weapons/machete.png',
    }, {
        name: 'axe',
        minDamage: 4,
        maxDamage: 7,
        price: 30,
        src: 'img/weapons/axe.png',
    }, {
        name: 'rusty sword',
        minDamage: 5,
        maxDamage: 10,
        price: 40,
        src: 'img/weapons/rusty_sword.png',
    }, {
        name: 'regular sword',
        minDamage: 6,
        maxDamage: 12,
        price: 50,
        src: 'img/weapons/regular_sword.png',
    }, {
        name: 'mace',
        minDamage: 5,
        maxDamage: 15,
        price: 60,
        src: 'img/weapons/mace.png',
    }, {
        name: 'duel sword',
        minDamage: 7,
        maxDamage: 15,
        price: 70,
        src: 'img/weapons/duel_sword.png',
    }, {
        name: 'saw sword',
        minDamage: 10,
        maxDamage: 18,
        price: 100,
        src: 'img/weapons/saw_sword.png',
    }, {
        name: 'katana',
        minDamage: 13,
        maxDamage: 19,
        price: 120,
        src: 'img/weapons/katana.png',
    }, {
        name: 'red gem sword',
        minDamage: 15,
        maxDamage: 22,
        price: 150,
        src: 'img/weapons/red_gem_sword.png',
    }, {
        name: 'knight sword',
        minDamage: 15,
        maxDamage: 26,
        price: 180,
        src: 'img/weapons/knight_sword.png',
    }, {
        name: 'golden sword',
        minDamage: 17,
        maxDamage: 28,
        price: 200,
        src: 'img/weapons/golden_sword.png',
    }, {
        name: 'giant sword',
        minDamage: 15,
        maxDamage: 40,
        price: 350,
        src: 'img/weapons/giant_sword.png',
    }, {
        name: 'two-handed golden sword',
        minDamage: 20,
        maxDamage: 41,
        price: 400,
        src: 'img/weapons/two_handed_golden_sword.png',
    }, ];

    const hpHtml = document.querySelector('.hp');
    hpHtml.textContent = hero.HP + '/' + hero.maxHP;

    const gold = document.querySelector('.gold');
    gold.textContent = hero.gold;

    const levelHtml = document.querySelector('.level');
    levelHtml.textContent = hero.level;

    const eventHtml = document.querySelector('.event');
    const liveHtml = document.querySelector('.live');
    const eventHpHtml = document.querySelector('.eventHp');
    const heroHpHtml = document.querySelector('.heroHp');
    const eventFullHpHtml = document.querySelector('.eventFullHp');
    const flaskHtml = document.querySelectorAll('.flask');
    const endGame = document.querySelector('.endGame');
    const endGameButton = document.querySelector('.newGameButton');
    const heroContainer = document.querySelector('.heroContainer');
    const eventContainer = document.querySelector('.eventContainer');
    const shop = document.querySelector('.shop');
    const shopButton = document.querySelector('.shopButton');
    const weaponShop = document.querySelectorAll('.weaponShop');
    const flaskShop = document.querySelector('.flaskShop');
    const weaponUse = document.querySelector('.weaponUse');
    const continueHtml = document.querySelector('.continue');
    const expLine = document.querySelector('.experience');
    const weaponDamage = document.querySelector('.weaponDamage')
    const keyboard = document.querySelector('.keyboard');
    const keyboardMenu = document.querySelector('.keyboardMenu');

    let eventLot;
    let eventHP;
    let eventFullHp;

    //animations
    let number = -1;

    setInterval(() => {
        number++;

        if (number >= 4) {
            number = 0;
        }

        hero.html.src = hero.img + number + '.png';
        eventHtml.src = moobs[eventLot].img + number + '.png';
        const money = document.querySelectorAll('.money');

        for (let i = 0; i < money.length; i++) {
            money[i].src = 'img/icons/coin_' + number + '.png';
        }
    }, 150);
    ///////////

    lottery = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    createDangeon = () => {
        const floors = document.querySelectorAll('.floor');
        const floorTop = document.querySelectorAll('.floorTop');
        for (let i = 0; i < floors.length; i++) {
            if (lottery(0, 9) > 7) {
                floors[i].src = 'img/floor/floor_' + lottery(0, 7) + '.png';
            } else {
                floors[i].src = 'img/floor/floor_0.png'
            }
        }
        const walls = document.querySelectorAll('.wall');
        const wallBottom = document.querySelectorAll('.wallBottom');
        const wallTop = document.querySelectorAll('.wallTop');
        for (let i = 0; i < walls.length; i++) {
            if (lottery(0, 9) > 6) {
                walls[i].src = 'img/wall/wall_' + lottery(0, 3) + '.png';
            } else {
                walls[i].src = 'img/wall/wall_0.png';
            }
        }

        for (let i = 0; i < wallBottom.length; i++) {
            if (lottery(0, 9) > 7) {
                let lot = lottery(0, 7);
                wallBottom[i].src = 'img/wall/wall_' + lot + '.png';
                if (lot == 4) {
                    floorTop[i].src = 'img/floor/floor_8.png';
                } else if (lot == 5) {
                    floorTop[i].src = 'img/floor/floor_9.png';
                } else if (lot == 6) {
                    floorTop[i].src = 'img/floor/floor_10.png';
                } else if (lot == 7) {
                    floorTop[i].src = 'img/floor/floor_11.png';
                    walls[i].src = 'img/wall/wall_7.png';
                    wallTop[i].src = 'img/wall/wallTop_1.png';
                }
            } else {
                wallBottom[i].src = 'img/wall/wall_0.png';
            }
        }
    }

    event = () => {
        let heroPower;

        if (hero.level < 4) {
            heroPower = 5;
        } else if (hero.level < 6) {
            heroPower = 7;
        } else if (hero.level < 10) {
            heroPower = 10;
        } else if (hero.level < 15) {
            heroPower = 15;
        } else {
            heroPower = moobs.length;
        }

        if (lottery(0, 10) > 2) {
            eventLot = lottery(2, heroPower);
            eventHP = moobs[eventLot].HP;
            eventFullHp = eventHP;
            eventHpHtml.style.width = (eventHP / eventFullHp * 100) + '%';
            eventFullHpHtml.style.width = 100 + '%';
            eventHpHtml.style.backgroundColor = 'var(--fullHp)';
        } else {
            eventLot = lottery(0, 2);
            eventHpHtml.style.width = 0 + '%';
            eventFullHpHtml.style.width = 0 + '%';
        }
    }

    CrateInscription = (where, text, style) => {
        let log = document.createElement('div');
        where.appendChild(log);
        log.textContent = text;
        log.classList.add(style);
        if (style == 'items') {
            const coinAdd = document.createElement('img');
            log.appendChild(coinAdd);
            coinAdd.classList.add('money');

        } else if (style == 'flasksAdd') {
            const flaskAdd = document.createElement('img');
            log.appendChild(flaskAdd);
            const flaskImg = document.querySelectorAll('.' + style + ' img')
            for (i = 0; i < flaskImg.length; i++) {
                flaskImg[i].src = 'img/icons/flask_big_.png';
            }

        }

        log.addEventListener('animationend', (e) => {
            log.remove();
        });
    }

    createFlask = () => {
        while (hero.flasks > 0) {
            for (let i = 0; i < flaskHtml.length; i++) {
                if (flaskHtml[i].classList[1] != 'full') {
                    if (hero.flasks > 0) {
                        flaskHtml[i].classList.add('full');
                        hero.flasks = hero.flasks - 1;
                    }
                }
            }
            hero.flasks = hero.flasks - 1;
        }
    }

    reset = () => {
        hero.experience = 0;
        hero.level = 1;
        hero.maxHP = 100;
        hero.HP = 100;
        hero.weapon = 0;
        hero.flasks = 3;
        hero.gold = 0;
        weaponUse.src = weapons[0].src;
        weaponDamage.textContent = weapons[hero.weapon].minDamage + '-' + weapons[hero.weapon].maxDamage + 'dmg';
        levelBefore = hero.experience;

        liveLevel();

        for (let i = 0; i < flaskHtml.length; i++) {
            flaskHtml[i].classList.remove('full');
        }

        createFlask();
        createDangeon();
        event();
        gold.textContent = hero.gold;
        levelHtml.textContent = hero.level;
        hpHtml.textContent = hero.HP + '/' + hero.maxHP;
    }

    liveLevel = () => {
        if (hero.HP >= 0.5 * hero.maxHP) {
            liveHtml.src = 'img/icons/heart_0.png';
        } else if (hero.HP <= 0.05 * hero.maxHP) {
            liveHtml.src = 'img/icons/heart_2.png';
            if (hero.HP <= 0) {
                hero.HP = 0;
                endGame.classList.remove('none');
            }
        } else if (hero.HP <= 0.5 * hero.maxHP) {
            liveHtml.src = 'img/icons/heart_1.png';
        }
        heroHpHtml.style.width = (hero.HP / hero.maxHP * 100) + '%';

        if ((hero.HP / hero.maxHP * 100) >= 90) {
            heroHpHtml.style.backgroundColor = "var(--fullHp)";
        } else if ((hero.HP / hero.maxHP * 100) >= 60) {
            heroHpHtml.style.backgroundColor = "var(--lessHp)";
        } else if ((hero.HP / hero.maxHP * 100) >= 30) {
            heroHpHtml.style.backgroundColor = "var(--mediumHp)";
        } else if ((hero.HP / hero.maxHP * 100) > 7) {
            heroHpHtml.style.backgroundColor = "var(--colorFlask)";
        } else if ((hero.HP / hero.maxHP * 100) <= 7) {
            heroHpHtml.style.backgroundColor = "var(--colorRed)";
        }
    }
    let levelBefore = hero.experience;
    levelUp = () => {
        if (hero.experience > levelBefore + 135 * hero.level && hero.level < 1000) {
            levelBefore = hero.experience;
            hero.level++;
            levelHtml.textContent = hero.level;
            hero.maxHP += 5;
            hero.HP += 5;
            hpHtml.textContent = hero.HP + '/' + hero.maxHP;
            CrateInscription(heroContainer, 'LEVEL UP!', 'levelUp');
            expLine.style.width = ((hero.experience - levelBefore) / (135 * hero.level)) * 100 + '%';
        }
    }

    save = () => {
        localStorage.setItem('experience', hero.experience);
        localStorage.setItem('level', hero.level);
        localStorage.setItem('maxHP', hero.maxHP);
        localStorage.setItem('HP', hero.HP);
        localStorage.setItem('weapon', hero.weapon);
        localStorage.setItem('gold', hero.gold);
        localStorage.setItem('levelBefore', levelBefore);

        let flaskLoop = 0;
        for (let i = 0; i < flaskHtml.length; i++) {
            if (flaskHtml[i].classList[1] == 'full') {
                flaskLoop++;
            }
        }

        localStorage.setItem('flasks', flaskLoop);
    }

    //events
    eventClick = () => {
        if (eventLot > 1) {
            let damageMoob = lottery(moobs[eventLot].minDamage, moobs[eventLot].maxDamage);
            hero.HP = hero.HP - damageMoob;
            let damageHero = lottery(weapons[hero.weapon].minDamage, weapons[hero.weapon].maxDamage) + lottery(1, 6) + hero.level;
            eventHP = eventHP - damageHero;
            if (eventHP < 0) {
                eventHP = 0;
            }
            eventHpHtml.style.width = (eventHP / eventFullHp * 100) + '%';

            if ((eventHP / eventFullHp * 100) >= 90) {
                eventHpHtml.style.backgroundColor = "var(--fullHp)";
            } else if ((eventHP / eventFullHp * 100) >= 60) {
                eventHpHtml.style.backgroundColor = "var(--lessHp)";
            } else if ((eventHP / eventFullHp * 100) >= 30) {
                eventHpHtml.style.backgroundColor = "var(--mediumHp)";
            } else if ((eventHP / eventFullHp * 100) > 7) {
                eventHpHtml.style.backgroundColor = "var(--colorFlask)";
            } else if ((eventHP / eventFullHp * 100) <= 7) {
                eventHpHtml.style.backgroundColor = "var(--colorRed)";
            }

            CrateInscription(heroContainer, damageMoob, 'damage');
            CrateInscription(eventContainer, damageHero, 'damageMoob');

        } else if (eventLot == 1) {
            hero.flasks = lottery(0, 4);
            if (hero.flasks > 0) {
                CrateInscription(eventContainer, hero.flasks, 'flasksAdd');
                createFlask();
            }
            let goldAdd = lottery(1, 18) + lottery(0, hero.level);
            hero.gold = hero.gold + goldAdd;
            if (hero.gold > 99999) {
                hero.gold = 99999;
            }

            gold.textContent = hero.gold;
            CrateInscription(eventContainer, goldAdd, 'items');
        }

        if (eventLot <= 1) {
            createDangeon();
            event();
        }

        if (eventHP == 0 && eventLot > 1) {
            CrateInscription(eventContainer, moobs[eventLot].experience + 'exp', 'exp');
            hero.experience = hero.experience + moobs[eventLot].experience;
            expLine.style.width = ((hero.experience - levelBefore) / (135 * hero.level)) * 100 + '%';

            levelUp();
            createDangeon();
            event();
        }

        liveLevel();
        hpHtml.textContent = hero.HP + '/' + hero.maxHP;
        save();
        if (parseInt(localStorage.getItem('HP')) != 0 && localStorage.getItem('HP') != null) {
            continueHtml.classList.remove('none');
        } else {
            continueHtml.classList.add('none');
        }
    }

    eventHtml.addEventListener('click', eventClick);
    eventHtml.addEventListener('touch', eventClick);
    flaskClick = n => {
        if (flaskHtml[n].classList[1] == 'full' && hero.HP < hero.maxHP) {
            flaskHtml[n].classList.remove('full');
            let addHp = Math.round((hero.maxHP / 4) + lottery(0, (hero.maxHP / 3)))
            hero.HP += addHp;
            CrateInscription(heroContainer, '+' + addHp, 'damage');
            if (hero.HP > hero.maxHP) {
                hero.HP = hero.maxHP;
            }
        }
        hpHtml.textContent = hero.HP + '/' + hero.maxHP;
        liveLevel();
        save();
    }

    for (let i = 0; i < flaskHtml.length; i++) {
        flaskHtml[i].addEventListener('click', (e) => {
            flaskClick(i);
        });
        flaskHtml[i].addEventListener('touch', (e) => {
            flaskClick(i);
        });
    }

    endGameButtonClick = () => {
        endGame.classList.add('none');
        reset();
        expLine.style.width = ((hero.experience - levelBefore) / (135 * hero.level)) * 100 + '%';
    }

    endGameButton.addEventListener('click', endGameButtonClick);
    endGameButton.addEventListener('touch', endGameButtonClick);

    load = () => {
        endGame.classList.add('none');

        hero.experience = parseInt(localStorage.getItem('experience'));
        hero.level = parseInt(localStorage.getItem('level'));
        hero.maxHP = parseInt(localStorage.getItem('maxHP'));
        hero.HP = parseInt(localStorage.getItem('HP'));
        hero.weapon = parseInt(localStorage.getItem('weapon'));
        hero.gold = parseInt(localStorage.getItem('gold'));
        hero.flasks = parseInt(localStorage.getItem('flasks'));
        levelBefore = parseInt(localStorage.getItem('levelBefore'))
        createFlask();
        liveLevel();

        weaponUse.src = weapons[hero.weapon].src;
        weaponDamage.textContent = weapons[hero.weapon].minDamage + '-' + weapons[hero.weapon].maxDamage + 'dmg';
        hpHtml.textContent = hero.HP + '/' + hero.maxHP;
        gold.textContent = hero.gold;
        levelHtml.textContent = hero.level;
        expLine.style.width = ((hero.experience - levelBefore) / (135 * hero.level)) * 100 + '%';
    }

    if (parseInt(localStorage.getItem('HP')) != 0 && localStorage.getItem('HP') != null) {
        continueHtml.classList.remove('none');
    }

    continueHtml.addEventListener('click', load);
    continueHtml.addEventListener('touch', load);


    let weaponToBuy = [];

    whatInShop = () => {
        const weaponsImg = document.querySelectorAll('.weaponImg');
        const weaponInfo = document.querySelectorAll('.weaponInfo');
        let n = hero.level;
        if (n > weapons.length - 3) {
            n = weapons.length - 3
        }

        for (let i = 0; i < weaponsImg.length; i++) {
            weaponsImg[i].src = weapons[i + n].src;
            weaponInfo[i].textContent = weapons[i + n].minDamage + '-' + weapons[i + n].maxDamage + 'dmg ' + weapons[i + n].price + 'x ';
            weaponToBuy[i] = i + n;
        }
    }

    for (let i = 0; i < weaponShop.length; i++) {
        weaponShop[i].addEventListener('click', (e) => {
            if (hero.gold >= weapons[weaponToBuy[i]].price && hero.weapon != weaponToBuy[i]) {
                hero.gold -= weapons[weaponToBuy[i]].price;
                hero.weapon = weaponToBuy[i];
                weaponUse.src = weapons[weaponToBuy[i]].src;
                weaponDamage.textContent = weapons[hero.weapon].minDamage + '-' + weapons[hero.weapon].maxDamage + 'dmg';
                gold.textContent = hero.gold;
                save();
            }
        });
    }

    shopButton.addEventListener('click', (e) => {
        shop.classList.toggle('none');
        whatInShop();
    });
    shopButton.addEventListener('touch', (e) => {
        shop.classList.toggle('none');
        whatInShop();
    });

    buyFlask = () => {
        if (hero.gold >= 10 && flaskHtml[0].classList[1] != 'full' || hero.gold >= 10 && flaskHtml[1].classList[1] != 'full' || hero.gold >= 10 && flaskHtml[2].classList[1] != 'full' || hero.gold >= 10 && flaskHtml[3].classList[1] != 'full' || hero.gold >= 10 && flaskHtml[4].classList[1] != 'full') {
            hero.gold -= 10;
            hero.flasks = 1;
            createFlask();
            gold.textContent = hero.gold;
            save();
        }
    }

    flaskShop.addEventListener('click', buyFlask);
    flaskShop.addEventListener('touch', buyFlask);

    document.addEventListener("keyup", event => {
        if (endGame.classList[1] == 'none') {
            if (shop.classList[1] == 'none') {
                if (event.code == 'Enter' || event.code == 'Space') {
                    eventClick();
                }
            }

            for (let i = 0; i < flaskHtml.length; i++) {
                if (event.code == 'Digit' + (1 + i)) {
                    flaskClick(i);
                }
            }

            if (event.code == 'Escape') {
                shop.classList.toggle('none');
                whatInShop();
            }
        }
    });

    keyboard.addEventListener('click', (e) => {
        keyboardMenu.classList.toggle('none');
    });
    keyboard.addEventListener('touch', (e) => {
        keyboardMenu.classList.toggle('none');
    });

    event();
    createDangeon();
    liveLevel();
})();