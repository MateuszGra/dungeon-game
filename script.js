(function () {
    const hero = {
        name: 'name',
        level: 1,
        experience: 0,
        maxHP: 100,
        HP: 100,
        weapon: 0,
        flasks: 3,
        html: document.querySelector('.hero'),
        img: 'img/heores/knight_',
    }
    const moobs = [{
        name: 'chest empty',
        img: 'img/chest/chest_',
    }, {
        name: 'chest full',
        img: 'img/chest/chest_full_',
    }, {
        name: 'goblin',
        img: 'img/moobs/goblin_',
        HP: 10,
        minDamage: 1,
        maxDamage: 4,
    }, {
        name: 'imp',
        img: 'img/moobs/imp_',
        HP: 12,
        minDamage: 2,
        maxDamage: 3,
    }, {
        name: 'tiny zombie',
        img: 'img/moobs/tiny_zombie_',
        HP: 12,
        minDamage: 1,
        maxDamage: 3,
    }, {
        name: 'muddy',
        img: 'img/moobs/muddy_',
        HP: 30,
        minDamage: 10,
        maxDamage: 20,
    }, {
        name: 'swampy',
        img: 'img/moobs/swampy_',
        HP: 35,
        minDamage: 10,
        maxDamage: 23,
    }, {
        name: 'skelet',
        img: 'img/moobs/skelet_',
        HP: 70,
        minDamage: 10,
        maxDamage: 25,
    }, {
        name: 'zombie',
        img: 'img/moobs/zombie_',
        HP: 70,
        minDamage: 10,
        maxDamage: 25,
    }, {
        name: 'ice zombie',
        img: 'img/moobs/ice_zombie_',
        HP: 70,
        minDamage: 10,
        maxDamage: 26,
    }, {
        name: 'orc warrior',
        img: 'img/moobs/orc_warrior_',
        HP: 80,
        minDamage: 11,
        maxDamage: 27,
    }, {
        name: 'masked orc',
        img: 'img/moobs/masked_orc_',
        HP: 85,
        minDamage: 13,
        maxDamage: 30,
    }, {
        name: 'orc shaman',
        img: 'img/moobs/orc_shaman_',
        HP: 60,
        minDamage: 15,
        maxDamage: 30,
    }, {
        name: 'chort',
        img: 'img/moobs/chort_',
        HP: 60,
        minDamage: 15,
        maxDamage: 30,
    }, {
        name: 'necromancer',
        img: 'img/moobs/necromancer_',
        HP: 60,
    }, {
        name: 'ogre',
        img: 'img/moobs/ogre_',
        HP: 100,
        minDamage: 15,
        maxDamage: 30,
    }, {
        name: 'big demon',
        img: 'img/moobs/big_demon_',
        HP: 90,
        minDamage: 15,
        maxDamage: 30,
    }, {
        name: 'big zombie',
        img: 'img/moobs/big_zombie_',
        HP: 90,
        minDamage: 15,
        maxDamage: 30,
    }]

    const hpHtml = document.querySelector('.hp');
    hpHtml.textContent = hero.HP + '/' + hero.maxHP;

    const eventHtml = document.querySelector('.event');
    const liveHtml = document.querySelector('.live');
    const eventHpHtml = document.querySelector('.eventHp');
    const eventFullHpHtml = document.querySelector('.eventFullHp');
    const flaskHtml = document.querySelectorAll('.flask');

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
        if (hero.level < 10) {
            heroPower = 4;
        } else {
            heroPower = moobs.length;
        }
        eventLot = lottery(0, heroPower);
        eventHP = moobs[eventLot].HP;
        eventFullHp = eventHP;
        eventHpHtml.style.width = (eventHP / eventFullHp * 100) + '%';
        eventFullHpHtml.style.width = 100 + '%';

        if (eventLot <= 1) {
            eventHpHtml.style.width = 0 + '%';
            eventFullHpHtml.style.width = 0 + '%';
        }
    }

    createDangeon();
    event();

    for (i = 0; i < hero.flasks; i++) {
        flaskHtml[i].classList.add('full');
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

    function liveLevel() {
        if (hero.HP >= 0.5 * hero.maxHP) {
            liveHtml.src = 'img/icons/heart_0.png';
        } else if (hero.HP <= 0.05 * hero.maxHP) {
            liveHtml.src = 'img/icons/heart_2.png';
            if (hero.HP <= 0) {
                hero.HP = 0;
            }
        } else if (hero.HP <= 0.5 * hero.maxHP) {
            liveHtml.src = 'img/icons/heart_1.png';
        }
    }
    //events
    eventHtml.addEventListener('click', function (e) {
        if (eventLot > 1) {
            let damageMoob = lottery(moobs[eventLot].minDamage, moobs[eventLot].maxDamage);
            hero.HP = hero.HP - damageMoob;
            let damageHero = lottery(weapons[hero.weapon].minDamage, weapons[hero.weapon].maxDamage) + lottery(1, 6) + hero.level;
            eventHP = eventHP - damageHero;
            eventHpHtml.style.width = (eventHP / eventFullHp * 100) + '%';
        }
        if (eventHP <= 0 || eventLot <= 1) {
            createDangeon();
            event();
        }
        liveLevel();
        hpHtml.textContent = hero.HP + '/' + hero.maxHP;
    });
    for (i = 0; i < flaskHtml.length; i++) {
        flaskHtml[i].addEventListener('click', function (e) {
            if (this.classList[1] == 'full' && hero.HP < hero.maxHP) {
                this.classList.remove('full');
                hero.HP = hero.HP + (hero.maxHP / 4) + lottery(0, (hero.maxHP / 3));
                if (hero.HP > hero.maxHP) {
                    hero.HP = hero.maxHP;
                }
            }
            hpHtml.textContent = hero.HP + '/' + hero.maxHP;
            liveLevel();
        });
    }
})();