(function () {
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
        HP: 18,
        minDamage: 0,
        maxDamage: 4,
        experience: 10,
    }, {
        name: 'imp',
        img: 'img/moobs/imp_',
        HP: 10,
        minDamage: 2,
        maxDamage: 6,
        experience: 12,
    }, {
        name: 'tiny zombie',
        img: 'img/moobs/tiny_zombie_',
        HP: 20,
        minDamage: 0,
        maxDamage: 4,
        experience: 10,
    }, {
        name: 'muddy',
        img: 'img/moobs/muddy_',
        HP: 30,
        minDamage: 2,
        maxDamage: 7,
        experience: 15,
    }, {
        name: 'swampy',
        img: 'img/moobs/swampy_',
        HP: 35,
        minDamage: 2,
        maxDamage: 7,
        experience: 15,
    }, {
        name: 'skelet',
        img: 'img/moobs/skelet_',
        HP: 70,
        minDamage: 3,
        maxDamage: 6,
        experience: 20,
    }, {
        name: 'zombie',
        img: 'img/moobs/zombie_',
        HP: 50,
        minDamage: 2,
        maxDamage: 7,
        experience: 20,
    }, {
        name: 'ice zombie',
        img: 'img/moobs/ice_zombie_',
        HP: 70,
        minDamage: 2,
        maxDamage: 8,
        experience: 30,
    }, {
        name: 'orc warrior',
        img: 'img/moobs/orc_warrior_',
        HP: 80,
        minDamage: 0,
        maxDamage: 10,
        experience: 32,
    }, {
        name: 'masked orc',
        img: 'img/moobs/masked_orc_',
        HP: 85,
        minDamage: 2,
        maxDamage: 15,
        experience: 40,
    }, {
        name: 'orc shaman',
        img: 'img/moobs/orc_shaman_',
        HP: 50,
        minDamage: 5,
        maxDamage: 12,
        experience: 40,
    }, {
        name: 'chort',
        img: 'img/moobs/chort_',
        HP: 40,
        minDamage: 0,
        maxDamage: 25,
        experience: 40,
    }, {
        name: 'necromancer',
        img: 'img/moobs/necromancer_',
        HP: 60,
        minDamage: 5,
        maxDamage: 25,
        experience: 45,
    }, {
        name: 'ogre',
        img: 'img/moobs/ogre_',
        HP: 100,
        minDamage: 4,
        maxDamage: 17,
        experience: 45,
    }, {
        name: 'big demon',
        img: 'img/moobs/big_demon_',
        HP: 90,
        minDamage: 4,
        maxDamage: 17,
        experience: 45,
    }, {
        name: 'big zombie',
        img: 'img/moobs/big_zombie_',
        HP: 90,
        minDamage: 4,
        maxDamage: 17,
        experience: 45,
    }]

    const weapons = [{
        name: 'knife',
        minDamage: 1,
        maxDamage: 3,
        src: 'img/weapons/knife.png',
    }, {
        name: 'club with spikes',
        minDamage: 2,
        maxDamage: 5,
        src: 'img/weapons/club_with_spikes.png',
    }, {
        name: 'claver',
        minDamage: 3,
        maxDamage: 5,
        src: 'img/weapons/cleaver.png',
    }, {
        name: 'machete',
        minDamage: 3,
        maxDamage: 6,
        src: 'img/weapons/machete.png',
    }, {
        name: 'axe',
        minDamage: 4,
        maxDamage: 7,
        src: 'img/weapons/axe.png',
    }, {
        name: 'rusty sword',
        minDamage: 5,
        maxDamage: 10,
        src: 'img/weapons/rusty_sword.png',
    }, {
        name: 'regular sword',
        minDamage: 6,
        maxDamage: 12,
        src: 'img/weapons/regular_sword.png',
    }, {
        name: 'mace',
        minDamage: 5,
        maxDamage: 15,
        src: 'img/weapons/mace.png',
    }, {
        name: 'duel sword',
        minDamage: 7,
        maxDamage: 15,
        src: 'img/weapons/duel_sword.png',
    }, {
        name: 'saw sword',
        minDamage: 10,
        maxDamage: 18,
        src: 'img/weapons/saw_sword.png',
    }, {
        name: 'katana',
        minDamage: 13,
        maxDamage: 19,
        src: 'img/weapons/katana.png',
    }, {
        name: 'red gem sword',
        minDamage: 15,
        maxDamage: 22,
        src: 'img/weapons/red_gem_sword.png',
    }, {
        name: 'knight sword',
        minDamage: 15,
        maxDamage: 26,
        src: 'img/weapons/knight_sword.png',
    }, {
        name: 'golden sword',
        minDamage: 17,
        maxDamage: 28,
        src: 'img/weapons/golden_sword.png',
    }, {
        name: 'giant sword',
        minDamage: 8,
        maxDamage: 40,
        src: 'img/weapons/giant_sword.png',
    }, {
        name: 'two-handed golden sword',
        minDamage: 20,
        maxDamage: 32,
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
    const endGameButton = document.querySelector('.endGame button');
    const heroContainer = document.querySelector('.heroContainer');
    const eventContainer = document.querySelector('.eventContainer');

    function lottery(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function createDangeon() {
        const floors = document.querySelectorAll('.floor');
        const floorTop = document.querySelectorAll('.floorTop');
        for (i = 0; i < floors.length; i++) {
            if (lottery(0, 9) > 7) {
                floors[i].src = 'img/floor/floor_' + lottery(0, 7) + '.png';
            } else {
                floors[i].src = 'img/floor/floor_0.png'
            }
        }
        const walls = document.querySelectorAll('.wall');
        const wallBottom = document.querySelectorAll('.wallBottom');
        const wallTop = document.querySelectorAll('.wallTop');
        for (i = 0; i < walls.length; i++) {
            if (lottery(0, 9) > 6) {
                walls[i].src = 'img/wall/wall_' + lottery(0, 3) + '.png';
            } else {
                walls[i].src = 'img/wall/wall_0.png';
            }
        }

        for (i = 0; i < wallBottom.length; i++) {
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
    let eventLot;
    let eventHP;
    let eventFullHp;

    function event() {
        let heroPower;
        if (hero.level < 4) {
            heroPower = 5;
        } else if (hero.level < 6) {
            heroPower = 9;
        } else {
            heroPower = moobs.length;
        }

        if (lottery(0, 10) > 2) {
            eventLot = lottery(2, heroPower);
            eventHP = moobs[eventLot].HP;
            eventFullHp = eventHP;
            eventHpHtml.style.width = (eventHP / eventFullHp * 100) + '%';
            eventFullHpHtml.style.width = 100 + '%';
            eventHpHtml.style.backgroundColor = "var(--fullHp)";
        } else {
            eventLot = lottery(0, 2);
            eventHpHtml.style.width = 0 + '%';
            eventFullHpHtml.style.width = 0 + '%';
        }
    }

    function CrateInscription(where, text, style) {
        let log = document.createElement('div');
        where.appendChild(log);
        log.textContent = text;
        log.classList.add(style);
        if (style == 'items') {
            const coinAdd = document.createElement('img');
            log.appendChild(coinAdd);
            const coinsImg = document.querySelectorAll('.' + style + ' img');
            for (i = 0; i < coinsImg.length; i++) {
                coinsImg[i].src = 'img/icons/coin_0.png';
            }

        } else if (style == 'flasksAdd') {
            const flaskAdd = document.createElement('img');
            log.appendChild(flaskAdd);
            const flaskImg = document.querySelectorAll('.' + style + ' img')
            for (i = 0; i < flaskImg.length; i++) {
                flaskImg[i].src = 'img/icons/flask_big_.png';
            }

        }

        log.addEventListener('animationend', function (e) {
            log.remove();
        });
    }

    function createFlask() {
        while (hero.flasks > 0) {
            for (i = 0; i < flaskHtml.length; i++) {
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

    //animations
    let number = -1;

    function animate() {
        number++;

        if (number >= 4) {
            number = 0;
        }
        hero.html.src = hero.img + number + '.png';
        eventHtml.src = moobs[eventLot].img + number + '.png';
        document.querySelector('.coin').src = 'img/icons/coin_' + number + '.png';
    }
    setInterval(() => {
        animate();
    }, 150);

    function reset() {
        hero.experience = 0;
        hero.level = 1;
        hero.maxHP = 100;
        hero.HP = 100;
        hero.weapon = 0;
        hero.flasks = 3;
        hero.gold = 0;

        liveLevel();

        for (i = 0; i < flaskHtml.length; i++) {
            flaskHtml[i].classList.remove('full');
        }

        createFlask();
        createDangeon();
        event();
        gold.textContent = hero.gold;
        levelHtml.textContent = hero.level;
        hpHtml.textContent = hero.HP + '/' + hero.maxHP;
    }

    function liveLevel() {
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

    function levelUp() {
        const exp = 100;
        if (hero.experience > exp * hero.level + 0.35 * hero.experience) {
            hero.level++;
            levelHtml.textContent = hero.level;
            hero.maxHP += 5;
            hero.HP += 5;
            hpHtml.textContent = hero.HP + '/' + hero.maxHP;
            CrateInscription(heroContainer, 'LEVEL UP!', 'levelUp');
        }
    }
    //events
    function eventClick() {
        if (eventLot > 1) {
            let damageMoob = lottery(moobs[eventLot].minDamage, moobs[eventLot].maxDamage);
            hero.HP = hero.HP - damageMoob;
            let damageHero = lottery(weapons[hero.weapon].minDamage, weapons[hero.weapon].maxDamage) + lottery(1, 6) + hero.level;
            eventHP = eventHP - damageHero;
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
            CrateInscription(eventContainer, hero.flasks, 'flasksAdd');
            createFlask();
            let goldAdd = lottery(0, 15) + lottery(0, hero.level);
            hero.gold = hero.gold + goldAdd;
            gold.textContent = hero.gold;
            CrateInscription(eventContainer, goldAdd, 'items');
        }

        if (eventHP <= 0 || eventLot <= 1) {
            hero.experience = hero.experience + moobs[eventLot].experience + hero.level;
            levelUp();
            createDangeon();
            event();
        }

        liveLevel();
        hpHtml.textContent = hero.HP + '/' + hero.maxHP;
    }

    eventHtml.addEventListener('click', eventClick);
    eventHtml.addEventListener('touch', eventClick);

    for (i = 0; i < flaskHtml.length; i++) {
        flaskHtml[i].addEventListener('click', function (e) {
            if (this.classList[1] == 'full' && hero.HP < hero.maxHP) {
                this.classList.remove('full');
                let addHp = Math.round((hero.maxHP / 4) + lottery(0, (hero.maxHP / 3)))
                hero.HP = hero.HP + addHp;
                CrateInscription(heroContainer, '+' + addHp, 'damage');
                if (hero.HP > hero.maxHP) {
                    hero.HP = hero.maxHP;
                }
            }
            hpHtml.textContent = hero.HP + '/' + hero.maxHP;
            liveLevel();
        });
        flaskHtml[i].addEventListener('touch', function (e) {
            if (this.classList[1] == 'full' && hero.HP < hero.maxHP) {
                this.classList.remove('full');
                let addHp = Math.round((hero.maxHP / 4) + lottery(0, (hero.maxHP / 3)))
                hero.HP = hero.HP + addHp;
                CrateInscription(heroContainer, '+' + addHp, 'damage');
                if (hero.HP > hero.maxHP) {
                    hero.HP = hero.maxHP;
                }
            }
            hpHtml.textContent = hero.HP + '/' + hero.maxHP;
            liveLevel();
        });
    }

    function endGameButtonClick() {
        endGame.classList.add('none');
        reset();
    }

    endGameButton.addEventListener('click', endGameButtonClick);
    endGameButton.addEventListener('touch', endGameButtonClick);

    event();
    createDangeon();
    liveLevel();
})();