(function () {
    const hero = {
        name: 'name',
        maxHP: 100,
        HP: 100,
        html: document.querySelector('.hero'),
    }
    const eventHtml = document.querySelector('.event');
    const eventSrc = ['img/chest/chest_', 'img/chest/chest_Full_', 'img/moobs/big_demon_', 'img/moobs/big_zombie_', 'img/moobs/chort_', 'img/moobs/goblin_', 'img/moobs/ice_zombie_', 'img/moobs/imp_'];

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

    function lottery(n) {
        let draw = Math.round(Math.random() * n);
        return draw;
    }

    function createDangeon() {
        const floors = document.querySelectorAll('.floor');
        const floorTop = document.querySelectorAll('.floorTop');
        for (i = 0; i < floors.length; i++) {
            if (lottery(9) > 7) {
                floors[i].src = 'img/floor/floor_' + lottery(7) + '.png';
            } else {
                floors[i].src = 'img/floor/floor_0.png'
            }
        }
        const walls = document.querySelectorAll('.wall');
        const wallBottom = document.querySelectorAll('.wallBottom');
        const wallTop = document.querySelectorAll('.wallTop');
        for (i = 0; i < walls.length; i++) {
            if (lottery(9) > 6) {
                walls[i].src = 'img/wall/wall_' + lottery(3) + '.png';
            } else {
                walls[i].src = 'img/wall/wall_0.png';
            }
        }

        for (i = 0; i < wallBottom.length; i++) {
            if (lottery(9) > 7) {
                let lot = lottery(7);
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
    let eventDraw;

    function event() {
        let eventLot = lottery(eventSrc.length - 1);
        eventDraw = eventSrc[eventLot];
    }
    createDangeon();
    event();

    //animations
    let number = -1;

    function animate() {
        number++;

        if (number >= 4) {
            number = 0;
        }
        hero.html.src = 'img/heores/knight_' + number + '.png';
        eventHtml.src = eventDraw + number + '.png';
    }
    setInterval(() => {
        animate();
    }, 150);
})();