		/************************************************************************************************************
		AI

		SCENARIO 							WANTED CARDS IN ORDER

	this first section obviously doesn't need to look at lizard slots

		LIZARDS ENERGY RESERVE
		0		0		0					lizard', 'energy3', 'upgrade3', 'energy2', 'upgrade2', 'energy1', 'upgrade1
		0		0		3					lizard', 'energy3', 'energy2', 'energy1
		0		0		2					lizard', 'energy3', 'upgrade3', 'energy2', 'energy1
		0		0		1					lizard', 'energy3', 'upgrade3', 'energy2', 'upgrade2', 'energy1
		0		3		0					lizard', 'upgrade3', 'upgrade2', 'upgrade1
		0		2		0					lizard', 'upgrade3', 'energy3', 'upgrade2', 'upgrade1
		0		1		0					lizard', 'upgrade3', 'energy3', 'upgrade2', 'upgrade1', 'energy2
		0		3		3					lizard
		0		3		2					lizard', 'upgrade3
		0		3		1					lizard', 'upgrade3', 'upgrade2
		0		2		3					lizard', 'energy3
		0		2		2					lizard', 'energy3', 'upgrade3
		0		2		1					lizard', 'upgrade3', 'upgrade2', 'energy3
		0		1		3					lizard', 'energy3', 'energy2
		0		1		2					lizard', 'energy3', 'upgrade3', 'energy2
		0		1		1					lizard', 'upgrade3', 'energy3', 'upgrade2', 'energy2


	1 lizard 0 energy 0 reserve

		LIZARDS ENERGY ATTACK  DEFENSE SPEEED RESERVE
		1		0		0 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'energy1', 'lizard
		1		0		0		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade1
		1		0		0		0 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		0		0 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		0		1		0		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade1
		1		0		0		1		1		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade1
		1		0		0		1		2		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		0		1		3		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		0		2		0		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		0		2		1		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		0		2		2		0		upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		0		2		3		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		0		3		1		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		0		3		0		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		0		3		2		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		0		3		3		0		attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		1 		1 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade1
		1		0		1 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade1
		1		0		1 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		2 		1 		0 		0		upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		1 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		2 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		3 		0 		0		speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1			
		1		0		1 		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade1
		1		0		1 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		1		0		1 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		2 		0 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		0 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		0 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		0 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		1 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		0 		0 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		3 		0 		0 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		1 		1 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard', 'upgrade1
		1		0		1 		1 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		1 		1 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		1 		2 		1 		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		1 		2 		2 		0		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		1 		2 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		1 		3 		1 		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		1 		3 		2 		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		1 		3 		3 		0		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		2 		1 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		1 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		1 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		2 		2 		1 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		2 		2 		0		upgrade3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		2 		3 		0		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		2 		3 		1 		0		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		3 		2 		0		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		1		0		2 		3 		3 		0		attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		1 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		1 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		1 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		2 		1 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		2 		2 		0		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		2 		3 		0		defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		3 		1 		0		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		3 		2 		0		speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		0		3 		3 		3 		0		energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1

	1 lizard 0 energy 1 reserve

		1		0		1 		1 		1 		1		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard
		1		0		1 		1 		2 		1		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		1 		1 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		1		0		1 		2 		1 		1		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		1 		2 		2 		1		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		1 		2 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		1 		3 		1 		1		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		1 		3 		2 		1		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		1 		3 		3 		1		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		2 		1 		1 		1		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		2 		1 		2 		1		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		2 		1 		3 		1		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		2 		2 		1 		1		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		2 		2 		2 		1		upgrade3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		2 		2 		3 		1		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		2 		3 		1 		1		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		2 		3 		2 		1		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		2 		3 		3 		1		attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		3 		1 		1 		1		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		3 		1 		2 		1		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		3 		1 		3 		1		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		3 		2 		1 		1		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		3 		2 		2 		1		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		3 		2 		3 		1		defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		3 		3 		1 		1		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		3 		3 		2 		1		speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		1		0		3 		3 		3 		1		energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2

	1 lizard 0 energy 2 reserve

		1		0		1 		1 		1 		2		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard
		1		0		1 		1 		2 		2		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard
		1		0		1 		1 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3
		1		0		1 		2 		1 		2		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		1 		2 		2 		2		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		1 		2 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		1 		3 		1 		2		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		1 		3 		2 		2		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		1		0		1 		3 		3 		2		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		2 		1 		1 		2		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		2 		1 		2 		2		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		2 		1 		3 		2		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		2 		2 		1 		2		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		2 		2 		2 		2		upgrade3', 'energy3', 'energy2', 'energy1', 'lizard
		1		0		2 		2 		3 		2		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		2 		3 		1 		2		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		2 		3 		2 		2		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard
		1		0		2 		3 		3 		2		attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		3 		1 		1 		2		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		3 		1 		2 		2		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		3 		1 		3 		2		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		3 		2 		1 		2		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		3 		2 		2 		2		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		3 		2 		3 		2		defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		3 		3 		1 		2		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		3 		3 		2 		2		speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		1		0		3 		3 		3 		2		energy3', 'energy2', 'energy1', 'lizard', 'upgrade3

	1 lizard 0 energy 3 reserve

		1		0		1 		1 		1 		3		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard
		1		0		1 		1 		2 		3		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard
		1		0		1 		1 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard
		1		0		1 		2 		1 		3		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		1 		2 		2 		3		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		1 		2 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		1		0		1 		3 		1 		3		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		1 		3 		2 		3		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		1		0		1 		3 		3 		3		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		1		0		2 		1 		1 		3		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		2 		1 		2 		3		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2
		1		0		2 		1 		3 		3		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard
		1		0		2 		2 		1 		3		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		2 		2 		2 		3		upgrade3', 'energy3', 'energy2', 'energy1', 'lizard
		1		0		2 		2 		3 		3		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard
		1		0		2 		3 		1 		3		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		2 		3 		2 		3		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard
		1		0		2 		3 		3 		3		attack3', 'energy3', 'energy2', 'energy1', 'lizard
		1		0		3 		1 		1 		3		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		3 		1 		2 		3		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard
		1		0		3 		1 		3 		3		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard
		1		0		3 		2 		1 		3		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		3 		2 		2 		3		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard
		1		0		3 		2 		3 		3		defense3', 'energy3', 'energy2', 'energy1', 'lizard
		1		0		3 		3 		1 		3		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		1		0		3 		3 		2 		3		speed3', 'energy3', 'energy2', 'energy1', 'lizard
		1		0		3 		3 		3 		3		energy3', 'energy2', 'energy1', 'lizard

	1 lizard 1+ energy 0 reserve --- only 1 energy needed when only 1 lizard is owned

		LIZARDS ENERGY ATTACK  DEFENSE SPEEED RESERVE
		1		1+		0 		0 		0 		0		upgrade3', 'upgrade2', 'upgrade1', 'lizard
		1		1+		0		0 		1 		0		upgrade3', 'upgrade2', 'attack1', 'defense1', 'lizard', 'upgrade1
		1		1+		0		0 		2 		0		upgrade3', 'attack2', 'defense2', 'attack1', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		0		0 		3 		0		attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		0		1		0		0		upgrade3', 'upgrade2', 'attack1', 'speed1', 'lizard', 'upgrade1
		1		1+		0		1		1		0		upgrade3', 'upgrade2', 'attack1', 'lizard', 'upgrade1
		1		1+		0		1		2		0		upgrade3', 'attack2', 'defense2', 'attack1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		0		1		3		0		attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		0		2		0		0		upgrade3', 'attack2', 'speed2', 'attack1', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		0		2		1		0		upgrade3', 'attack2', 'speed2', 'attack1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		0		2		2		0		upgrade3', 'attack2', 'attack1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		0		2		3		0		attack3', 'defense3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		0		3		0		0		attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		0		3		1		0		attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		0		3		2		0		attack3', 'speed3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		0		3		3		0		attack3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		1 		1 		0 		0		upgrade3', 'upgrade2', 'speed1', 'lizard', 'upgrade1
		1		1+		1 		2 		0 		0		upgrade3', 'speed2', 'attack2', 'speed1', 'lizard', 'upgrade1
		1		1+		1 		3 		0 		0		speed3', 'attack3', 'speed2', 'attack2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		2 		1 		0 		0		upgrade3', 'speed2', 'defense2', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		2 		0 		0		upgrade3', 'speed2', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		3 		0 		0		speed3', 'attack3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		1 		0 		0		speed3', 'defense3', 'speed2', 'defense2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		2 		0 		0		speed3', 'defense3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		3 		0 		0		speed3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1			
		1		1+		1 		0 		1 		0		upgrade3', 'upgrade2', 'defense1', 'lizard', 'upgrade1
		1		1+		1 		0 		2 		0		upgrade3', 'defense2', 'attack2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		1 		0 		3 		0		defense3', 'attack3', 'defense2', 'attack2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		2 		0 		1 		0		upgrade3', 'defense2', 'speed2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		0 		2 		0		upgrade3', 'defense2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		0 		3 		0		defense3', 'attack3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		0 		1 		0		defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		0 		2 		0		defense3', 'speed3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		0 		3 		0		defense3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		1 		0 		0 		0		upgrade3', 'upgrade2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		0 		0 		0		upgrade3', 'defense2', 'speed2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		1		1+		3 		0 		0 		0		defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		1 		1 		1 		0		upgrade3', 'upgrade2', 'lizard', 'upgrade1
		1		1+		1 		1 		2 		0		upgrade3', 'attack2', 'defense2', 'lizard', 'upgrade2', 'upgrade1
		1		1+		1 		1 		3 		0		attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		1 		2 		1 		0		upgrade3', 'attack2', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		1		1+		1 		2 		2 		0		upgrade3', 'attack2', 'lizard', 'upgrade2', 'upgrade1
		1		1+		1 		2 		3 		0		attack3', 'defense3', 'attack2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		1 		3 		1 		0		attack3', 'speed3', 'attack2', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		1		1+		1 		3 		2 		0		attack3', 'speed3', 'attack2', 'lizard', 'upgrade2', 'upgrade1
		1		1+		1 		3 		3 		0		attack3', 'attack2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		2 		1 		1 		0		upgrade3', 'defense2', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		1 		2 		0		upgrade3', 'defense2', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		1 		3 		0		defense3', 'attack3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		2 		2 		1 		0		upgrade3', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		2 		2 		0		upgrade3', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		2 		3 		0		attack3', 'defense3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		2 		3 		1 		0		attack3', 'speed3', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		3 		2 		0		attack3', 'speed3', 'lizard', 'upgrade2', 'upgrade1
		1		1+		2 		3 		3 		0		attack3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		1 		1 		0		defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		1 		2 		0		defense3', 'speed3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		1 		3 		0		defense3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		2 		1 		0		speed3', 'defense3', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		2 		2 		0		defense3', 'speed3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		2 		3 		0		defense3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		3 		1 		0		speed3', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		3 		2 		0		speed3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		1		1+		3 		3 		3 		0		lizard', 'upgrade3', 'upgrade2', 'upgrade1

	1 lizard 1+ energy 1 reserve

		1		1+		1 		1 		1 		1		upgrade3', 'upgrade2', 'lizard
		1		1+		1 		1 		2 		1		upgrade3', 'attack2', 'defense2', 'lizard', 'upgrade2
		1		1+		1 		1 		3 		1		attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3', 'upgrade2
		1		1+		1 		2 		1 		1		upgrade3', 'attack2', 'speed2', 'lizard', 'upgrade2
		1		1+		1 		2 		2 		1		upgrade3', 'attack2', 'lizard', 'upgrade2
		1		1+		1 		2 		3 		1		attack3', 'defense3', 'attack2', 'lizard', 'upgrade3', 'upgrade2
		1		1+		1 		3 		1 		1		attack3', 'speed3', 'attack2', 'speed2', 'lizard', 'upgrade2
		1		1+		1 		3 		2 		1		attack3', 'speed3', 'attack2', 'lizard', 'upgrade2
		1		1+		1 		3 		3 		1		attack3', 'attack2', 'lizard', 'upgrade3', 'upgrade2
		1		1+		2 		1 		1 		1		upgrade3', 'defense2', 'speed2', 'lizard', 'upgrade2
		1		1+		2 		1 		2 		1		upgrade3', 'defense2', 'lizard', 'upgrade2
		1		1+		2 		1 		3 		1		defense3', 'attack3', 'defense2', 'lizard', 'upgrade3', 'upgrade2
		1		1+		2 		2 		1 		1		upgrade3', 'speed2', 'lizard', 'upgrade2
		1		1+		2 		2 		2 		1		upgrade3', 'lizard', 'upgrade2
		1		1+		2 		2 		3 		1		attack3', 'defense3', 'lizard', 'upgrade3', 'upgrade2
		1		1+		2 		3 		1 		1		attack3', 'speed3', 'speed2', 'lizard', 'upgrade2
		1		1+		2 		3 		2 		1		attack3', 'speed3', 'lizard', 'upgrade2
		1		1+		2 		3 		3 		1		attack3', 'lizard', 'upgrade3', 'upgrade2
		1		1+		3 		1 		1 		1		defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3', 'upgrade2
		1		1+		3 		1 		2 		1		defense3', 'speed3', 'defense2', 'lizard', 'upgrade3', 'upgrade2
		1		1+		3 		1 		3 		1		defense3', 'defense2', 'lizard', 'upgrade3', 'upgrade2
		1		1+		3 		2 		1 		1		speed3', 'defense3', 'speed2', 'lizard', 'upgrade3', 'upgrade2
		1		1+		3 		2 		2 		1		defense3', 'speed3', 'lizard', 'upgrade3', 'upgrade2
		1		1+		3 		2 		3 		1		defense3', 'lizard', 'upgrade3', 'upgrade2
		1		1+		3 		3 		1 		1		speed3', 'speed2', 'lizard', 'upgrade3', 'upgrade2
		1		1+		3 		3 		2 		1		speed3', 'lizard', 'upgrade3', 'upgrade2
		1		1+		3 		3 		3 		1		lizard', 'upgrade3', 'upgrade2

	1 lizard 1+ energy 2 reserve

		1		1+		1 		1 		1 		2		upgrade3', 'upgrade2', 'lizard
		1		1+		1 		1 		2 		2		upgrade3', 'attack2', 'defense2', 'lizard
		1		1+		1 		1 		3 		2		attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3
		1		1+		1 		2 		1 		2		upgrade3', 'attack2', 'speed2', 'lizard
		1		1+		1 		2 		2 		2		upgrade3', 'attack2', 'lizard
		1		1+		1 		2 		3 		2		attack3', 'defense3', 'attack2', 'lizard', 'upgrade3
		1		1+		1 		3 		1 		2		attack3', 'speed3', 'attack2', 'speed2', 'lizard
		1		1+		1 		3 		2 		2		attack3', 'speed3', 'attack2', 'lizard
		1		1+		1 		3 		3 		2		attack3', 'attack2', 'lizard', 'upgrade3
		1		1+		2 		1 		1 		2		upgrade3', 'defense2', 'speed2', 'lizard
		1		1+		2 		1 		2 		2		upgrade3', 'defense2', 'lizard
		1		1+		2 		1 		3 		2		defense3', 'attack3', 'defense2', 'lizard', 'upgrade3
		1		1+		2 		2 		1 		2		upgrade3', 'speed2', 'lizard
		1		1+		2 		2 		2 		2		upgrade3', 'lizard
		1		1+		2 		2 		3 		2		attack3', 'defense3', 'lizard', 'upgrade3
		1		1+		2 		3 		1 		2		attack3', 'speed3', 'speed2', 'lizard
		1		1+		2 		3 		2 		2		attack3', 'speed3', 'lizard
		1		1+		2 		3 		3 		2		attack3', 'lizard', 'upgrade3
		1		1+		3 		1 		1 		2		defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3
		1		1+		3 		1 		2 		2		defense3', 'speed3', 'defense2', 'lizard', 'upgrade3
		1		1+		3 		1 		3 		2		defense3', 'defense2', 'lizard', 'upgrade3
		1		1+		3 		2 		1 		2		speed3', 'defense3', 'speed2', 'lizard', 'upgrade3
		1		1+		3 		2 		2 		2		defense3', 'speed3', 'lizard', 'upgrade3
		1		1+		3 		2 		3 		2		defense3', 'lizard', 'upgrade3
		1		1+		3 		3 		1 		2		speed3', 'speed2', 'lizard', 'upgrade3
		1		1+		3 		3 		2 		2		speed3', 'lizard', 'upgrade3
		1		1+		3 		3 		3 		2		lizard', 'upgrade3

	1 lizard 1+ energy 3 reserve

		1		1+		1 		1 		1 		3		upgrade3', 'upgrade2', 'lizard
		1		1+		1 		1 		2 		3		upgrade3', 'attack2', 'defense2', 'lizard
		1		1+		1 		1 		3 		3		attack3', 'defense3', 'attack2', 'defense2', 'lizard
		1		1+		1 		2 		1 		3		upgrade3', 'attack2', 'speed2', 'lizard
		1		1+		1 		2 		2 		3		upgrade3', 'attack2', 'lizard
		1		1+		1 		2 		3 		3		attack3', 'defense3', 'attack2', 'lizard
		1		1+		1 		3 		1 		3		attack3', 'speed3', 'attack2', 'speed2', 'lizard
		1		1+		1 		3 		2 		3		attack3', 'speed3', 'attack2', 'lizard
		1		1+		1 		3 		3 		3		attack3', 'attack2', 'lizard
		1		1+		2 		1 		1 		3		upgrade3', 'defense2', 'speed2', 'lizard
		1		1+		2 		1 		2 		3		upgrade3', 'defense2', 'lizard
		1		1+		2 		1 		3 		3		defense3', 'attack3', 'defense2', 'lizard
		1		1+		2 		2 		1 		3		upgrade3', 'speed2', 'lizard
		1		1+		2 		2 		2 		3		upgrade3', 'lizard
		1		1+		2 		2 		3 		3		attack3', 'defense3', 'lizard
		1		1+		2 		3 		1 		3		attack3', 'speed3', 'speed2', 'lizard
		1		1+		2 		3 		2 		3		attack3', 'speed3', 'lizard
		1		1+		2 		3 		3 		3		attack3', 'lizard
		1		1+		3 		1 		1 		3		defense3', 'speed3', 'defense2', 'speed2', 'lizard
		1		1+		3 		1 		2 		3		defense3', 'speed3', 'defense2', 'lizard
		1		1+		3 		1 		3 		3		defense3', 'defense2', 'lizard
		1		1+		3 		2 		1 		3		speed3', 'defense3', 'speed2', 'lizard
		1		1+		3 		2 		2 		3		defense3', 'speed3', 'lizard
		1		1+		3 		2 		3 		3		defense3', 'lizard
		1		1+		3 		3 		1 		3		speed3', 'speed2', 'lizard
		1		1+		3 		3 		2 		3		speed3', 'lizard
		1		1+		3 		3 		3 		3		lizard

2 lizards 0 energy 0 reserve

		LIZARDS ENERGY ATTACK  DEFENSE SPEEED RESERVE
		2		0		0 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'energy1', 'lizard
		2		0		0		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade1
		2		0		0		0 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		0		0 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		0		1		0		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade1
		2		0		0		1		1		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade1
		2		0		0		1		2		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		0		1		3		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		0		2		0		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		0		2		1		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		0		2		2		0		upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		0		2		3		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		0		3		0		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		0		3		1		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		0		3		2		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		0		3		3		0		attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		1 		1 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade1
		2		0		1 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade1
		2		0		1 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		2 		1 		0 		0		upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		1 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		2 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		3 		0 		0		speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1			
		2		0		1 		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade1
		2		0		1 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		2		0		1 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		2 		0 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		0 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		0 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		0 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		1 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		0 		0 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		3 		0 		0 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		1 		1 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard', 'upgrade1
		2		0		1 		1 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		1 		1 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		1 		2 		1 		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		1 		2 		2 		0		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		1 		2 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		1 		3 		1 		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		1 		3 		2 		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		1 		3 		3 		0		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		2 		1 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		1 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		1 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		2 		2 		1 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		2 		2 		0		upgrade3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		2 		3 		0		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		2 		3 		1 		0		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		3 		2 		0		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1
		2		0		2 		3 		3 		0		attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		1 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		1 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		1 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		2 		1 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		2 		2 		0		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		2 		3 		0		defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		3 		1 		0		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		3 		2 		0		speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		0		3 		3 		3 		0		energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1

	2 lizards 0 energy 1 reserve

		2		0		1 		1 		1 		1		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard
		2		0		1 		1 		2 		1		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		1 		1 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		0		1 		2 		1 		1		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		1 		2 		2 		1		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		1 		2 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		1 		3 		1 		1		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		1 		3 		2 		1		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		1 		3 		3 		1		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		2 		1 		1 		1		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		2 		1 		2 		1		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		2 		1 		3 		1		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		2 		2 		1 		1		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		2 		2 		2 		1		upgrade3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		2 		2 		3 		1		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		2 		3 		1 		1		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		2 		3 		2 		1		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2
		2		0		2 		3 		3 		1		attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		3 		1 		1 		1		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		3 		1 		2 		1		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		3 		1 		3 		1		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		3 		2 		1 		1		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		3 		2 		2 		1		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		3 		2 		3 		1		defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		3 		3 		1 		1		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		3 		3 		2 		1		speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2
		2		0		3 		3 		3 		1		energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2

	2 lizards 0 energy 2 reserve

		2		0		1 		1 		1 		2		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard
		2		0		1 		1 		2 		2		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard
		2		0		1 		1 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3
		2		0		1 		2 		1 		2		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		1 		2 		2 		2		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		2		0		1 		2 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		1 		3 		1 		2		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		1 		3 		2 		2		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		2		0		1 		3 		3 		2		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		2 		1 		1 		2		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		2 		1 		2 		2		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard
		2		0		2 		1 		3 		2		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		2 		2 		1 		2		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		2 		2 		2 		2		upgrade3', 'energy3', 'energy2', 'energy1', 'lizard
		2		0		2 		2 		3 		2		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		2 		3 		1 		2		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		2 		3 		2 		2		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard
		2		0		2 		3 		3 		2		attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		3 		1 		1 		2		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		3 		1 		2 		2		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		3 		1 		3 		2		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		3 		2 		1 		2		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		3 		2 		2 		2		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		3 		2 		3 		2		defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		3 		3 		1 		2		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		3 		3 		2 		2		speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3
		2		0		3 		3 		3 		2		energy3', 'energy2', 'energy1', 'lizard', 'upgrade3

	2 lizards 0 energy 3 reserve

		2		0		1 		1 		1 		3		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard
		2		0		1 		1 		2 		3		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard
		2		0		1 		1 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard
		2		0		1 		2 		1 		3		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		1 		2 		2 		3		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		2		0		1 		2 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		2		0		1 		3 		1 		3		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		1 		3 		2 		3		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		2		0		1 		3 		3 		3		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard
		2		0		2 		1 		1 		3		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		2 		1 		2 		3		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard
		2		0		2 		1 		3 		3		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard
		2		0		2 		2 		1 		3		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		2 		2 		2 		3		upgrade3', 'energy3', 'energy2', 'energy1', 'lizard
		2		0		2 		2 		3 		3		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard
		2		0		2 		3 		1 		3		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		2 		3 		2 		3		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard
		2		0		2 		3 		3 		3		attack3', 'energy3', 'energy2', 'energy1', 'lizard
		2		0		3 		1 		1 		3		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		3 		1 		2 		3		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard
		2		0		3 		1 		3 		3		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard
		2		0		3 		2 		1 		3		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		3 		2 		2 		3		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard
		2		0		3 		2 		3 		3		defense3', 'energy3', 'energy2', 'energy1', 'lizard
		2		0		3 		3 		1 		3		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard
		2		0		3 		3 		2 		3		speed3', 'energy3', 'energy2', 'energy1', 'lizard
		2		0		3 		3 		3 		3		energy3', 'energy2', 'energy1', 'lizard

	2 lizards 1 energy 0 reserve

		LIZARDS ENERGY ATTACK  DEFENSE SPEEED RESERVE
		2		1		0 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'lizard
		2		1		0		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'lizard', 'upgrade1
		2		1		0		0 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		2		1		0		0 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		0		1		0		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'lizard', 'upgrade1
		2		1		0		1		1		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'lizard', 'upgrade1
		2		1		0		1		2		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'lizard', 'upgrade2', 'upgrade1
		2		1		0		1		3		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		0		2		0		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		1		0		2		1		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'lizard', 'upgrade2', 'upgrade1
		2		1		0		2		2		0		upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'lizard', 'upgrade2', 'upgrade1
		2		1		0		2		3		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		0		3		0		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		0		3		1		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		0		3		2		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		0		3		3		0		attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		1 		1 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'lizard', 'upgrade1
		2		1		1 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'lizard', 'upgrade1
		2		1		1 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		2 		1 		0 		0		upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		1 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		2 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		3 		0 		0		speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1			
		2		1		1 		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'lizard', 'upgrade1
		2		1		1 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		2		1		1 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		2 		0 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		0 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		0 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		0 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		1 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		0 		0 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		1		3 		0 		0 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		1 		1 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'lizard', 'upgrade1
		2		1		1 		1 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		1 		1 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		1 		2 		1 		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		1 		2 		2 		0		upgrade3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		1 		2 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		1 		3 		1 		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		1 		3 		2 		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		1 		3 		3 		0		attack3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		2 		1 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		1 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		1 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		2 		2 		1 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		2 		2 		0		upgrade3', 'energy3', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		2 		3 		0		attack3', 'defense3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		2 		3 		1 		0		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		3 		2 		0		attack3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade2', 'upgrade1
		2		1		2 		3 		3 		0		attack3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		1 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		1 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		1 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		2 		1 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		2 		2 		0		defense3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		2 		3 		0		defense3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		3 		1 		0		speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		3 		2 		0		speed3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		1		3 		3 		3 		0		energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1

	2 lizards 1 energy 1 reserve

		2		1		1 		1 		1 		1		upgrade3', 'energy3', 'upgrade2', 'energy2', 'lizard
		2		1		1 		1 		2 		1		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard', 'upgrade2
		2		1		1 		1 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		1 		2 		1 		1		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard', 'upgrade2
		2		1		1 		2 		2 		1		upgrade3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2
		2		1		1 		2 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		1 		3 		1 		1		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard', 'upgrade2
		2		1		1 		3 		2 		1		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2
		2		1		1 		3 		3 		1		attack3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		2 		1 		1 		1		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade2
		2		1		2 		1 		2 		1		upgrade3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade2
		2		1		2 		1 		3 		1		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		2 		2 		1 		1		upgrade3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade2
		2		1		2 		2 		2 		1		upgrade3', 'energy3', 'energy2', 'lizard', 'upgrade2
		2		1		2 		2 		3 		1		attack3', 'defense3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		2 		3 		1 		1		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade2
		2		1		2 		3 		2 		1		attack3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade2
		2		1		2 		3 		3 		1		attack3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		3 		1 		1 		1		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		3 		1 		2 		1		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		3 		1 		3 		1		defense3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		3 		2 		1 		1		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		3 		2 		2 		1		defense3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		3 		2 		3 		1		defense3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		3 		3 		1 		1		speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		3 		3 		2 		1		speed3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2
		2		1		3 		3 		3 		1		lenergy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2

	2 lizards 1 energy 2 reserve

		2		1		1 		1 		1 		2		upgrade3', 'energy3', 'upgrade2', 'energy2', 'lizard
		2		1		1 		1 		2 		2		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard
		2		1		1 		1 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard', 'upgrade3
		2		1		1 		2 		1 		2		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard
		2		1		1 		2 		2 		2		upgrade3', 'energy3', 'attack2', 'energy2', 'lizard
		2		1		1 		2 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3
		2		1		1 		3 		1 		2		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard
		2		1		1 		3 		2 		2		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'lizard
		2		1		1 		3 		3 		2		attack3', '\energy3', 'attack2', 'energy2', 'lizard', 'upgrade3
		2		1		2 		1 		1 		2		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard
		2		1		2 		1 		2 		2		upgrade3', 'energy3', 'defense2', 'energy2', 'lizard
		2		1		2 		1 		3 		2		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3
		2		1		2 		2 		1 		2		upgrade3', 'energy3', 'speed2', 'energy2', 'lizard
		2		1		2 		2 		2 		2		upgrade3', 'energy3', 'energy2', 'lizard
		2		1		2 		2 		3 		2		attack3', 'defense3', 'energy3', 'energy2', 'lizard', 'upgrade3
		2		1		2 		3 		1 		2		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'lizard
		2		1		2 		3 		2 		2		attack3', 'speed3', 'energy3', 'energy2', 'lizard
		2		1		2 		3 		3 		2		attack3', 'energy3', 'energy2', 'lizard', 'upgrade3
		2		1		3 		1 		1 		2		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade3
		2		1		3 		1 		2 		2		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3
		2		1		3 		1 		3 		2		defense3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3
		2		1		3 		2 		1 		2		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3
		2		1		3 		2 		2 		2		defense3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade3
		2		1		3 		2 		3 		2		defense3', 'energy3', 'energy2', 'lizard', 'upgrade3
		2		1		3 		3 		1 		2		speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3
		2		1		3 		3 		2 		2		speed3', 'energy3', 'energy2', 'lizard', 'upgrade3
		2		1		3 		3 		3 		2		energy3', 'energy2', 'lizard', 'upgrade3

	2 lizards 1 energy 3 reserve

		2		1		1 		1 		1 		3		upgrade3', 'energy3', 'upgrade2', 'energy2', 'lizard
		2		1		1 		1 		2 		3		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard
		2		1		1 		1 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard
		2		1		1 		2 		1 		3		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard
		2		1		1 		2 		2 		3		upgrade3', 'energy3', 'attack2', 'energy2', 'lizard
		2		1		1 		2 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'lizard
		2		1		1 		3 		1 		3		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard
		2		1		1 		3 		2 		3		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'lizard
		2		1		1 		3 		3 		3		attack3', 'energy3', 'attack2', 'energy2', 'lizard
		2		1		2 		1 		1 		3		upgrade3', 'energy3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard
		2		1		2 		1 		2 		3		upgrade3', 'defense2', 'energy2', 'lizard
		2		1		2 		1 		3 		3		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'lizard
		2		1		2 		2 		1 		3		upgrade3', 'energy3', 'speed2', 'energy2', 'lizard
		2		1		2 		2 		2 		3		upgrade3', 'energy3', 'energy2', 'lizard
		2		1		2 		2 		3 		3		attack3', 'defense3', 'energy3', 'energy2', 'lizard
		2		1		2 		3 		1 		3		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'lizard
		2		1		2 		3 		2 		3		attack3', 'speed3', 'energy3', 'energy2', 'lizard
		2		1		2 		3 		3 		3		attack3', 'energy3', 'energy2', 'lizard
		2		1		3 		1 		1 		3		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard
		2		1		3 		1 		2 		3		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'lizard
		2		1		3 		1 		3 		3		defense3', 'energy3', 'defense2', 'energy2', 'lizard
		2		1		3 		2 		1 		3		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'lizard
		2		1		3 		2 		2 		3		defense3', 'speed3', 'energy3', 'energy2', 'lizard
		2		1		3 		2 		3 		3		defense3', 'energy3', 'energy2', 'lizard
		2		1		3 		3 		1 		3		speed3', 'energy3', 'speed2', 'energy2', 'lizard
		2		1		3 		3 		2 		3		speed3', 'energy3', 'energy2', 'lizard
		2		1		3 		3 		3 		3		energy3', 'energy2', 'lizard

	2 lizards 2+ energy 0 reserve --- only 2 energy needed when only 2 lizards are owned

		LIZARDS ENERGY ATTACK  DEFENSE SPEEED RESERVE
		2		2+		0 		0 		0 		0		upgrade3', 'upgrade2', 'upgrade1', 'lizard
		2		2+		0		0 		1 		0		upgrade3', 'upgrade2', 'attack1', 'defense1', 'lizard', 'upgrade1
		2		2+		0		0 		2 		0		upgrade3', 'attack2', 'defense2', 'attack1', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		0		0 		3 		0		attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		0		1		0		0		upgrade3', 'upgrade2', 'attack1', 'speed1', 'lizard', 'upgrade1
		2		2+		0		1		1		0		upgrade3', 'upgrade2', 'attack1', 'lizard', 'upgrade1
		2		2+		0		1		2		0		upgrade3', 'attack2', 'defense2', 'attack1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		0		1		3		0		attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		0		2		0		0		upgrade3', 'attack2', 'speed2', 'attack1', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		0		2		1		0		upgrade3', 'attack2', 'speed2', 'attack1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		0		2		2		0		upgrade3', 'attack2', 'attack1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		0		2		3		0		attack3', 'defense3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		0		3		0		0		attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		0		3		1		0		attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		0		3		2		0		attack3', 'speed3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		0		3		3		0		attack3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		1 		1 		0 		0		upgrade3', 'upgrade2', 'speed1', 'lizard', 'upgrade1
		2		2+		1 		2 		0 		0		upgrade3', 'speed2', 'attack2', 'speed1', 'lizard', 'upgrade1
		2		2+		1 		3 		0 		0		speed3', 'attack3', 'speed2', 'attack2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		2 		1 		0 		0		upgrade3', 'speed2', 'defense2', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		2 		0 		0		upgrade3', 'speed2', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		3 		0 		0		speed3', 'attack3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		1 		0 		0		speed3', 'defense3', 'speed2', 'defense2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		2 		0 		0		speed3', 'defense3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		3 		0 		0		speed3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1			
		2		2+		1 		0 		1 		0		upgrade3', 'upgrade2', 'defense1', 'lizard', 'upgrade1
		2		2+		1 		0 		2 		0		upgrade3', 'defense2', 'attack2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		1 		0 		3 		0		defense3', 'attack3', 'defense2', 'attack2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		2 		0 		1 		0		upgrade3', 'defense2', 'speed2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		0 		2 		0		upgrade3', 'defense2', 'defense1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		0 		3 		0		defense3', 'attack3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		0 		1 		0		defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		0 		2 		0		defense3', 'speed3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		0 		3 		0		defense3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		1 		0 		0 		0		upgrade3', 'upgrade2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		0 		0 		0		upgrade3', 'defense2', 'speed2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1
		2		2+		3 		0 		0 		0		defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		1 		1 		1 		0		upgrade3', 'upgrade2', 'lizard', 'upgrade1
		2		2+		1 		1 		2 		0		upgrade3', 'attack2', 'defense2', 'lizard', 'upgrade2', 'upgrade1
		2		2+		1 		1 		3 		0		attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		1 		2 		1 		0		upgrade3', 'attack2', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		2		2+		1 		2 		2 		0		upgrade3', 'attack2', 'lizard', 'upgrade2', 'upgrade1
		2		2+		1 		2 		3 		0		attack3', 'defense3', 'attack2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		1 		3 		1 		0		attack3', 'speed3', 'attack2', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		2		2+		1 		3 		2 		0		attack3', 'speed3', 'attack2', 'lizard', 'upgrade2', 'upgrade1
		2		2+		1 		3 		3 		0		attack3', 'attack2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		2 		1 		1 		0		upgrade3', 'defense2', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		1 		2 		0		upgrade3', 'defense2', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		1 		3 		0		defense3', 'attack3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		2 		2 		1 		0		upgrade3', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		2 		2 		0		upgrade3', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		2 		3 		0		attack3', 'defense3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		2 		3 		1 		0		attack3', 'speed3', 'speed2', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		3 		2 		0		attack3', 'speed3', 'lizard', 'upgrade2', 'upgrade1
		2		2+		2 		3 		3 		0		attack3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		1 		1 		0		defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		1 		2 		0		defense3', 'speed3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		1 		3 		0		defense3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		2 		1 		0		speed3', 'defense3', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		2 		2 		0		defense3', 'speed3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		2 		3 		0		defense3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		3 		1 		0		speed3', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		3 		2 		0		speed3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		2		2+		3 		3 		3 		0		lizard', 'upgrade3', 'upgrade2', 'upgrade1

	2 lizards 2+ energy 1 reserve

		2		2+		1 		1 		1 		1		upgrade3', 'upgrade2', 'lizard
		2		2+		1 		1 		2 		1		upgrade3', 'attack2', 'defense2', 'lizard', 'upgrade2
		2		2+		1 		1 		3 		1		attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3', 'upgrade2
		2		2+		1 		2 		1 		1		upgrade3', 'attack2', 'speed2', 'lizard', 'upgrade2
		2		2+		1 		2 		2 		1		upgrade3', 'attack2', 'lizard', 'upgrade2
		2		2+		1 		2 		3 		1		attack3', 'defense3', 'attack2', 'lizard', 'upgrade3', 'upgrade2
		2		2+		1 		3 		1 		1		attack3', 'speed3', 'attack2', 'speed2', 'lizard', 'upgrade2
		2		2+		1 		3 		2 		1		attack3', 'speed3', 'attack2', 'lizard', 'upgrade2
		2		2+		1 		3 		3 		1		attack3', 'attack2', 'lizard', 'upgrade3', 'upgrade2
		2		2+		2 		1 		1 		1		upgrade3', 'defense2', 'speed2', 'lizard', 'upgrade2
		2		2+		2 		1 		2 		1		upgrade3', 'defense2', 'lizard', 'upgrade2
		2		2+		2 		1 		3 		1		defense3', 'attack3', 'defense2', 'lizard', 'upgrade3', 'upgrade2
		2		2+		2 		2 		1 		1		upgrade3', 'speed2', 'lizard', 'upgrade2
		2		2+		2 		2 		2 		1		upgrade3', 'lizard', 'upgrade2
		2		2+		2 		2 		3 		1		attack3', 'defense3', 'lizard', 'upgrade3', 'upgrade2
		2		2+		2 		3 		1 		1		attack3', 'speed3', 'speed2', 'lizard', 'upgrade2
		2		2+		2 		3 		2 		1		attack3', 'speed3', 'lizard', 'upgrade2
		2		2+		2 		3 		3 		1		attack3', 'lizard', 'upgrade3', 'upgrade2
		2		2+		3 		1 		1 		1		defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3', 'upgrade2
		2		2+		3 		1 		2 		1		defense3', 'speed3', 'defense2', 'lizard', 'upgrade3', 'upgrade2
		2		2+		3 		1 		3 		1		defense3', 'defense2', 'lizard', 'upgrade3', 'upgrade2
		2		2+		3 		2 		1 		1		speed3', 'defense3', 'speed2', 'lizard', 'upgrade3', 'upgrade2
		2		2+		3 		2 		2 		1		defense3', 'speed3', 'lizard', 'upgrade3', 'upgrade2
		2		2+		3 		2 		3 		1		defense3', 'lizard', 'upgrade3', 'upgrade2
		2		2+		3 		3 		1 		1		speed3', 'speed2', 'lizard', 'upgrade3', 'upgrade2
		2		2+		3 		3 		2 		1		speed3', 'lizard', 'upgrade3', 'upgrade2
		2		2+		3 		3 		3 		1		lizard', 'upgrade3', 'upgrade2

	2 lizards 2+ energy 2 reserve

		2		2+		1 		1 		1 		2		upgrade3', 'upgrade2', 'lizard
		2		2+		1 		1 		2 		2		upgrade3', 'attack2', 'defense2', 'lizard
		2		2+		1 		1 		3 		2		attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3
		2		2+		1 		2 		1 		2		upgrade3', 'attack2', 'speed2', 'lizard
		2		2+		1 		2 		2 		2		upgrade3', 'attack2', 'lizard
		2		2+		1 		2 		3 		2		attack3', 'defense3', 'attack2', 'lizard', 'upgrade3
		2		2+		1 		3 		1 		2		attack3', 'speed3', 'attack2', 'speed2', 'lizard
		2		2+		1 		3 		2 		2		attack3', 'speed3', 'attack2', 'lizard
		2		2+		1 		3 		3 		2		attack3', 'attack2', 'lizard', 'upgrade3
		2		2+		2 		1 		1 		2		upgrade3', 'defense2', 'speed2', 'lizard
		2		2+		2 		1 		2 		2		upgrade3', 'defense2', 'lizard
		2		2+		2 		1 		3 		2		defense3', 'attack3', 'defense2', 'lizard', 'upgrade3
		2		2+		2 		2 		1 		2		upgrade3', 'speed2', 'lizard
		2		2+		2 		2 		2 		2		upgrade3', 'lizard
		2		2+		2 		2 		3 		2		attack3', 'defense3', 'lizard', 'upgrade3
		2		2+		2 		3 		1 		2		attack3', 'speed3', 'speed2', 'lizard
		2		2+		2 		3 		2 		2		attack3', 'speed3', 'lizard
		2		2+		2 		3 		3 		2		attack3', 'lizard', 'upgrade3
		2		2+		3 		1 		1 		2		defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3
		2		2+		3 		1 		2 		2		defense3', 'speed3', 'defense2', 'lizard', 'upgrade3
		2		2+		3 		1 		3 		2		defense3', 'defense2', 'lizard', 'upgrade3
		2		2+		3 		2 		1 		2		speed3', 'defense3', 'speed2', 'lizard', 'upgrade3
		2		2+		3 		2 		2 		2		defense3', 'speed3', 'lizard', 'upgrade3
		2		2+		3 		2 		3 		2		defense3', 'lizard', 'upgrade3
		2		2+		3 		3 		1 		2		speed3', 'speed2', 'lizard', 'upgrade3
		2		2+		3 		3 		2 		2		speed3', 'lizard', 'upgrade3
		2		2+		3 		3 		3 		2		lizard', 'upgrade3

	2 lizards 2+ energy 3 reserve

		2		2+		1 		1 		1 		3		upgrade3', 'upgrade2', 'lizard
		2		2+		1 		1 		2 		3		upgrade3', 'attack2', 'defense2', 'lizard
		2		2+		1 		1 		3 		3		attack3', 'defense3', 'attack2', 'defense2', 'lizard
		2		2+		1 		2 		1 		3		upgrade3', 'attack2', 'speed2', 'lizard
		2		2+		1 		2 		2 		3		upgrade3', 'attack2', 'lizard
		2		2+		1 		2 		3 		3		attack3', 'defense3', 'attack2', 'lizard
		2		2+		1 		3 		1 		3		attack3', 'speed3', 'attack2', 'speed2', 'lizard
		2		2+		1 		3 		2 		3		attack3', 'speed3', 'attack2', 'lizard
		2		2+		1 		3 		3 		3		attack3', 'attack2', 'lizard
		2		2+		2 		1 		1 		3		upgrade3', 'defense2', 'speed2', 'lizard
		2		2+		2 		1 		2 		3		upgrade3', 'defense2', 'lizard
		2		2+		2 		1 		3 		3		defense3', 'attack3', 'defense2', 'lizard
		2		2+		2 		2 		1 		3		upgrade3', 'speed2', 'lizard
		2		2+		2 		2 		2 		3		upgrade3', 'lizard
		2		2+		2 		2 		3 		3		attack3', 'defense3', 'lizard
		2		2+		2 		3 		1 		3		attack3', 'speed3', 'speed2', 'lizard
		2		2+		2 		3 		2 		3		attack3', 'speed3', 'lizard
		2		2+		2 		3 		3 		3		attack3', 'lizard
		2		2+		3 		1 		1 		3		defense3', 'speed3', 'defense2', 'speed2', 'lizard
		2		2+		3 		1 		2 		3		defense3', 'speed3', 'defense2', 'lizard
		2		2+		3 		1 		3 		3		defense3', 'defense2', 'lizard
		2		2+		3 		2 		1 		3		speed3', 'defense3', 'speed2', 'lizard
		2		2+		3 		2 		2 		3		defense3', 'speed3', 'lizard
		2		2+		3 		2 		3 		3		defense3', 'lizard
		2		2+		3 		3 		1 		3		speed3', 'speed2', 'lizard
		2		2+		3 		3 		2 		3		speed3', 'lizard
		2		2+		3 		3 		3 		3		lizard

	3+ lizards 0 energy 0 reserve --- use same logic for 3 or more lizards since 3 is the optimal number

		LIZARDS ENERGY ATTACK  DEFENSE SPEEED RESERVE
		3+		0		0 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'energy1', 'powerup', 'lizard
		3+		0		0		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade1
		3+		0		0		0 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		0		0 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		0		1		0		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade1
		3+		0		0		1		1		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade1
		3+		0		0		1		2		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		0		1		3		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		0		2		0		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		0		2		1		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		0		2		2		0		upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		0		2		3		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		0		3		0		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		0		3		1		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		0		3		2		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		0		3		3		0		attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		1 		1 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade1
		3+		0		1 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade1
		3+		0		1 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		2 		1 		0 		0		upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		1 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		2 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		3 		0 		0		speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1			
		3+		0		1 		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade1
		3+		0		1 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		1 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		2 		0 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		0 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		0 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		0 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		1 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		0 		0 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		3 		0 		0 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		1 		1 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade1
		3+		0		1 		1 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		1 		1 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		1 		2 		1 		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		1 		2 		2 		0		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		1 		2 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		1 		3 		1 		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		1 		3 		2 		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		1 		3 		3 		0		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		2 		1 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		1 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		1 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		2 		2 		1 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		2 		2 		0		upgrade3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		2 		3 		0		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		2 		3 		1 		0		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		3 		2 		0		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		0		2 		3 		3 		0		attack3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		1 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		1 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		1 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		2 		1 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		2 		2 		0		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		2 		3 		0		defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		3 		1 		0		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		3 		2 		0		speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		0		3 		3 		3 		0		energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1

	3+ lizards 0 energy 1 reserve

		3+		0		1 		1 		1 		1		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		1 		2 		1		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		1 		1 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		1 		2 		1 		1		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		1 		2 		2 		1		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		1 		2 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		1 		3 		1 		1		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		1 		3 		2 		1		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		1 		3 		3 		1		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		2 		1 		1 		1		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		2 		1 		2 		1		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		2 		1 		3 		1		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		2 		2 		1 		1		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		2 		2 		2 		1		upgrade3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		2 		2 		3 		1		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		2 		3 		1 		1		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		2 		3 		2 		1		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2
		3+		0		2 		3 		3 		1		attack3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		3 		1 		1 		1		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		3 		1 		2 		1		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		3 		1 		3 		1		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		3 		2 		1 		1		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		3 		2 		2 		1		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		3 		2 		3 		1		defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		3 		3 		1 		1		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		3 		3 		2 		1		speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		0		3 		3 		3 		1		energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2

	3+ lizards 0 energy 2 reserve

		3+		0		1 		1 		1 		2		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		1 		2 		2		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		1 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		0		1 		2 		1 		2		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		2 		2 		2		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		2 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		1 		3 		1 		2		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		3 		2 		2		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		3 		3 		2		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		2 		1 		1 		2		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		1 		2 		2		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		1 		3 		2		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		2 		2 		1 		2		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		2 		2 		2		upgrade3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		2 		3 		2		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		2 		3 		1 		2		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		3 		2 		2		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		3 		3 		2		attack3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		3 		1 		1 		2		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		3 		1 		2 		2		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		3 		1 		3 		2		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		3 		2 		1 		2		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		3 		2 		2 		2		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		3 		2 		3 		2		defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		3 		3 		1 		2		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		3 		3 		2 		2		speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3
		3+		0		3 		3 		3 		2		energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3

	3+ lizards 0 energy 3 reserve

		3+		0		1 		1 		1 		3		upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		1 		2 		3		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		1 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard
		3+		0		1 		2 		1 		3		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		2 		2 		3		upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		2 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		3 		1 		3		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		3 		2 		3		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		1 		3 		3 		3		attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		1 		1 		3		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		1 		2 		3		upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		1 		3 		3		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		2 		1 		3		upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		2 		2 		3		upgrade3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		2 		3 		3		attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		3 		1 		3		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		3 		2 		3		attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		2 		3 		3 		3		attack3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		3 		1 		1 		3		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		3 		1 		2 		3		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		3 		1 		3 		3		defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		3 		2 		1 		3		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		3 		2 		2 		3		defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		3 		2 		3 		3		defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		3 		3 		1 		3		speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		3 		3 		2 		3		speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard
		3+		0		3 		3 		3 		3		energy3', 'energy2', 'energy1', 'powerup', 'lizard

	3+ lizards 1 energy 0 reserve

		LIZARDS ENERGY ATTACK  DEFENSE SPEEED RESERVE
		3+		1		0 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'powerup', 'lizard
		3+		1		0		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade1
		3+		1		0		0 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		0		0 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		0		1		0		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade1
		3+		1		0		1		1		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade1
		3+		1		0		1		2		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		0		1		3		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		0		2		0		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		0		2		1		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		0		2		2		0		upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		0		2		3		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		0		3		0		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		0		3		1		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		0		3		2		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		0		3		3		0		attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		1 		1 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade1
		3+		1		1 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade1
		3+		1		1 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		2 		1 		0 		0		upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		1 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		2 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		3 		0 		0		speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1			
		3+		1		1 		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade1
		3+		1		1 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		1 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		2 		0 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		0 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		0 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		0 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		1 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		0 		0 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		3 		0 		0 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		1 		1 		1 		0		upgrade3', 'energy3', 'upgrade2', 'energy2', 'powerup', 'lizard', 'upgrade1
		3+		1		1 		1 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		1 		1 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		1 		2 		1 		0		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		1 		2 		2 		0		upgrade3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		1 		2 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		1 		3 		1 		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		1 		3 		2 		0		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		1 		3 		3 		0		attack3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		2 		1 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		1 		2 		0		upgrade3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		1 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		2 		2 		1 		0		upgrade3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		2 		2 		0		upgrade3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		2 		3 		0		attack3', 'defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		2 		3 		1 		0		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		3 		2 		0		attack3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		1		2 		3 		3 		0		attack3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		1 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		1 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		1 		3 		0		defense3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		2 		1 		0		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		2 		2 		0		defense3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		2 		3 		0		defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		3 		1 		0		speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		3 		2 		0		speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		1		3 		3 		3 		0		energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1

	3+ lizards 1 energy 1 reserve

		3+		1		1 		1 		1 		1		upgrade3', 'energy3', 'upgrade2', 'energy2', 'powerup', 'lizard
		3+		1		1 		1 		2 		1		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		1 		1 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		1 		2 		1 		1		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		1 		2 		2 		1		upgrade3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		1 		2 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		1 		3 		1 		1		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		1 		3 		2 		1		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		1 		3 		3 		1		attack3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		2 		1 		1 		1		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		2 		1 		2 		1		upgrade3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		2 		1 		3 		1		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		2 		2 		1 		1		upgrade3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		2 		2 		2 		1		upgrade3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		2 		2 		3 		1		attack3', 'defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		2 		3 		1 		1		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		2 		3 		2 		1		attack3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade2
		3+		1		2 		3 		3 		1		attack3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		3 		1 		1 		1		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		3 		1 		2 		1		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		3 		1 		3 		1		defense3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		3 		2 		1 		1		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		3 		2 		2 		1		defense3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		3 		2 		3 		1		defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		3 		3 		1 		1		speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		3 		3 		2 		1		speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		1		3 		3 		3 		1		lenergy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2

	3+ lizards 1 energy 2 reserve

		3+		1		1 		1 		1 		2		upgrade3', 'energy3', 'upgrade2', 'energy2', 'powerup', 'lizard
		3+		1		1 		1 		2 		2		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard
		3+		1		1 		1 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		1 		2 		1 		2		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		1 		2 		2 		2		upgrade3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard
		3+		1		1 		2 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		1 		3 		1 		2		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		1 		3 		2 		2		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard
		3+		1		1 		3 		3 		2		attack3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		2 		1 		1 		2		upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		2 		1 		2 		2		upgrade3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard
		3+		1		2 		1 		3 		2		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		2 		2 		1 		2		upgrade3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		2 		2 		2 		2		upgrade3', 'energy3', 'energy2', 'powerup', 'lizard
		3+		1		2 		2 		3 		2		attack3', 'defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		2 		3 		1 		2		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		2 		3 		2 		2		attack3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard
		3+		1		2 		3 		3 		2		attack3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		3 		1 		1 		2		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		3 		1 		2 		2		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		3 		1 		3 		2		defense3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		3 		2 		1 		2		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		3 		2 		2 		2		defense3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		3 		2 		3 		2		defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		3 		3 		1 		2		speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		3 		3 		2 		2		speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3
		3+		1		3 		3 		3 		2		energy3', 'energy2', 'powerup', 'lizard', 'upgrade3

	3+ lizards 1 energy 3 reserve

		3+		1		1 		1 		1 		3		upgrade3', 'energy3', 'upgrade2', 'energy2', 'powerup', 'lizard
		3+		1		1 		1 		2 		3		upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard
		3+		1		1 		1 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard
		3+		1		1 		2 		1 		3		upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		1 		2 		2 		3		upgrade3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard
		3+		1		1 		2 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard
		3+		1		1 		3 		1 		3		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		1 		3 		2 		3		attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard
		3+		1		1 		3 		3 		3		attack3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard
		3+		1		2 		1 		1 		3		upgrade3', 'energy3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		2 		1 		2 		3		upgrade3', 'defense2', 'energy2', 'powerup', 'lizard
		3+		1		2 		1 		3 		3		defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard
		3+		1		2 		2 		1 		3		upgrade3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		2 		2 		2 		3		upgrade3', 'energy3', 'energy2', 'powerup', 'lizard
		3+		1		2 		2 		3 		3		attack3', 'defense3', 'energy3', 'energy2', 'powerup', 'lizard
		3+		1		2 		3 		1 		3		attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		2 		3 		2 		3		attack3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard
		3+		1		2 		3 		3 		3		attack3', 'energy3', 'energy2', 'powerup', 'lizard
		3+		1		3 		1 		1 		3		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		3 		1 		2 		3		defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard
		3+		1		3 		1 		3 		3		defense3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard
		3+		1		3 		2 		1 		3		speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		3 		2 		2 		3		defense3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard
		3+		1		3 		2 		3 		3		defense3', 'energy3', 'energy2', 'powerup', 'lizard
		3+		1		3 		3 		1 		3		speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard
		3+		1		3 		3 		2 		3		speed3', 'energy3', 'energy2', 'powerup', 'lizard
		3+		1		3 		3 		3 		3		energy3', 'energy2', 'powerup', 'lizard

	3+ lizards 2 energy 0 reserve 

		LIZARDS ENERGY ATTACK  DEFENSE SPEEED RESERVE
		3+		2		0 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'upgrade1', 'powerup', 'lizard
		3+		2		0		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade1
		3+		2		0		0 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		0		0 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		0		1		0		0		upgrade3', 'energy3', 'upgrade2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade1
		3+		2		0		1		1		0		upgrade3', 'energy3', 'upgrade2', 'attack1', 'powerup', 'lizard', 'upgrade1
		3+		2		0		1		2		0		upgrade3', 'energy3', 'attack2', 'defense2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		0		1		3		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		0		2		0		0		upgrade3', 'energy3', 'attack2', 'speed2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		0		2		1		0		upgrade3', 'energy3', 'attack2', 'speed2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		0		2		2		0		upgrade3', 'energy3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		0		2		3		0		attack3', 'defense3', 'energy3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		0		3		0		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		0		3		1		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		0		3		2		0		attack3', 'speed3', 'energy3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		0		3		3		0		attack3', 'energy3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		1 		1 		0 		0		upgrade3', 'energy3', 'upgrade2', 'speed1', 'powerup', 'lizard', 'upgrade1
		3+		2		1 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'attack2', 'speed1', 'powerup', 'lizard', 'upgrade1
		3+		2		1 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		2 		1 		0 		0		upgrade3', 'energy3', 'speed2', 'defense2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		2 		0 		0		upgrade3', 'energy3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		3 		0 		0		speed3', 'attack3', 'energy3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		1 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		2 		0 		0		speed3', 'defense3', 'energy3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		3 		0 		0		speed3', 'energy3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1			
		3+		2		1 		0 		1 		0		upgrade3', 'energy3', 'upgrade2', 'defense1', 'powerup', 'lizard', 'upgrade1
		3+		2		1 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'attack2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		1 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		2 		0 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		0 		2 		0		upgrade3', 'energy3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		0 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		0 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		0 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		0 		3 		0		defense3', 'energy3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		1 		0 		0 		0		upgrade3', 'energy3', 'upgrade2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		0 		0 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		3 		0 		0 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		1 		1 		1 		0		upgrade3', 'energy3', 'upgrade2', 'powerup', 'lizard', 'upgrade1
		3+		2		1 		1 		2 		0		upgrade3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		1 		1 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		1 		2 		1 		0		upgrade3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		1 		2 		2 		0		upgrade3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		1 		2 		3 		0		attack3', 'defense3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		1 		3 		1 		0		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		1 		3 		2 		0		attack3', 'speed3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		1 		3 		3 		0		attack3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		2 		1 		1 		0		upgrade3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		1 		2 		0		upgrade3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		1 		3 		0		defense3', 'attack3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		2 		2 		1 		0		upgrade3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		2 		2 		0		upgrade3', 'energy3', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		2 		3 		0		attack3', 'defense3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		2 		3 		1 		0		attack3', 'speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		3 		2 		0		attack3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		2		2 		3 		3 		0		attack3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		1 		1 		0		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		1 		2 		0		defense3', 'speed3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		1 		3 		0		defense3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		2 		1 		0		speed3', 'defense3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		2 		2 		0		defense3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		2 		3 		0		defense3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		3 		1 		0		speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		3 		2 		0		speed3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		2		3 		3 		3 		0		energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1

	3+ lizards 2 energy 1 reserve

		3+		2		1 		1 		1 		1		upgrade3', 'energy3', 'upgrade2', 'powerup', 'lizard
		3+		2		1 		1 		2 		1		upgrade3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade2
		3+		2		1 		1 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		1 		2 		1 		1		upgrade3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		2		1 		2 		2 		1		upgrade3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade2
		3+		2		1 		2 		3 		1		attack3', 'defense3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		1 		3 		1 		1		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		2		1 		3 		2 		1		attack3', 'speed3 ,energy3', 'attack2', 'powerup', 'lizard', 'upgrade2
		3+		2		1 		3 		3 		1		attack3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		2 		1 		1 		1		upgrade3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		2		2 		1 		2 		1		upgrade3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade2
		3+		2		2 		1 		3 		1		defense3', 'attack3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		2 		2 		1 		1		upgrade3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		2		2 		2 		2 		1		upgrade3', 'energy3', 'powerup', 'lizard', 'upgrade2
		3+		2		2 		2 		3 		1		attack3', 'defense3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		2 		3 		1 		1		attack3', 'speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		2		2 		3 		2 		1		attack3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade2
		3+		2		2 		3 		3 		1		attack3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		3 		1 		1 		1		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		3 		1 		2 		1		defense3', 'speed3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		3 		1 		3 		1		defense3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		3 		2 		1 		1		speed3', 'defense3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		3 		2 		2 		1		defense3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		3 		2 		3 		1		defense3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		3 		3 		1 		1		speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		3 		3 		2 		1		speed3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		2		3 		3 		3 		1		energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2

	3+ lizards 2 energy 2 reserve

		3+		2		1 		1 		1 		2		upgrade3', 'energy3', 'upgrade2', 'powerup', 'lizard
		3+		2		1 		1 		2 		2		upgrade3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard
		3+		2		1 		1 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3
		3+		2		1 		2 		1 		2		upgrade3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard
		3+		2		1 		2 		2 		2		upgrade3', 'energy3', 'attack2', 'powerup', 'lizard
		3+		2		1 		2 		3 		2		attack3', 'defense3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3
		3+		2		1 		3 		1 		2		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard
		3+		2		1 		3 		2 		2		attack3', 'speed3', 'energy3', 'attack2', 'powerup', 'lizard
		3+		2		1 		3 		3 		2		attack3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3
		3+		2		2 		1 		1 		2		upgrade3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard
		3+		2		2 		1 		2 		2		upgrade3', 'energy3', 'defense2', 'powerup', 'lizard
		3+		2		2 		1 		3 		2		defense3', 'attack3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3
		3+		2		2 		2 		1 		2		upgrade3', 'energy3', 'speed2', 'powerup', 'lizard
		3+		2		2 		2 		2 		2		upgrade3', 'energy3', 'powerup', 'lizard
		3+		2		2 		2 		3 		2		attack3', 'defense3', 'energy3', 'powerup', 'lizard', 'upgrade3
		3+		2		2 		3 		1 		2		attack3', 'speed3', 'energy3', 'speed2', 'powerup', 'lizard
		3+		2		2 		3 		2 		2		attack3', 'speed3', 'energy3', 'powerup', 'lizard
		3+		2		2 		3 		3 		2		attack3', 'energy3', 'powerup', 'lizard', 'upgrade3
		3+		2		3 		1 		1 		2		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3
		3+		2		3 		1 		2 		2		defense3', 'speed3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3
		3+		2		3 		1 		3 		2		defense3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3
		3+		2		3 		2 		1 		2		speed3', 'defense3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3
		3+		2		3 		2 		2 		2		defense3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade3
		3+		2		3 		2 		3 		2		defense3', 'energy3', 'powerup', 'lizard', 'upgrade3
		3+		2		3 		3 		1 		2		speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3
		3+		2		3 		3 		2 		2		speed3', 'energy3', 'powerup', 'lizard', 'upgrade3
		3+		2		3 		3 		3 		2		energy3', 'powerup', 'lizard', 'upgrade3

	3+ lizards 2 energy 3 reserve

		3+		2		1 		1 		1 		3		upgrade3', 'energy3', 'upgrade2', 'powerup', 'lizard
		3+		2		1 		1 		2 		3		upgrade3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard
		3+		2		1 		1 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard
		3+		2		1 		2 		1 		3		upgrade3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard
		3+		2		1 		2 		2 		3		upgrade3', 'energy3', 'attack2', 'powerup', 'lizard
		3+		2		1 		2 		3 		3		attack3', 'defense3', 'energy3', 'attack2', 'powerup', 'lizard
		3+		2		1 		3 		1 		3		attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard
		3+		2		1 		3 		2 		3		attack3', 'speed3', 'energy3', 'attack2', 'powerup', 'lizard
		3+		2		1 		3 		3 		3		attack3', 'energy3', 'attack2', 'powerup', 'lizard
		3+		2		2 		1 		1 		3		upgrade3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard
		3+		2		2 		1 		2 		3		upgrade3', 'energy3', 'defense2', 'powerup', 'lizard
		3+		2		2 		1 		3 		3		defense3', 'attack3', 'energy3', 'defense2', 'powerup', 'lizard
		3+		2		2 		2 		1 		3		upgrade3', 'energy3', 'speed2', 'powerup', 'lizard
		3+		2		2 		2 		2 		3		upgrade3', 'energy3', 'powerup', 'lizard
		3+		2		2 		2 		3 		3		attack3', 'defense3', 'energy3', 'powerup', 'lizard
		3+		2		2 		3 		1 		3		attack3', 'speed3', 'energy3', 'speed2', 'powerup', 'lizard
		3+		2		2 		3 		2 		3		attack3', 'speed3', 'energy3', 'powerup', 'lizard
		3+		2		2 		3 		3 		3		attack3', 'energy3', 'powerup', 'lizard
		3+		2		3 		1 		1 		3		defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard
		3+		2		3 		1 		2 		3		defense3', 'speed3', 'energy3', 'defense2', 'powerup', 'lizard
		3+		2		3 		1 		3 		3		defense3', 'energy3', 'defense2', 'powerup', 'lizard
		3+		2		3 		2 		1 		3		speed3', 'defense3', 'energy3', 'speed2', 'powerup', 'lizard
		3+		2		3 		2 		2 		3		defense3', 'speed3', 'energy3', 'powerup', 'lizard
		3+		2		3 		2 		3 		3		defense3', 'energy3', 'powerup', 'lizard
		3+		2		3 		3 		1 		3		speed3', 'energy3', 'speed2', 'powerup', 'lizard
		3+		2		3 		3 		2 		3		speed3', 'energy3', 'powerup', 'lizard
		3+		2		3 		3 		3 		3		energy3', 'powerup', 'lizard

	3+ lizards 3 energy 0 reserve

		LIZARDS ENERGY ATTACK  DEFENSE SPEEED RESERVE
		3+		3		0 		0 		0 		0		upgrade3', 'upgrade2', 'upgrade1', 'powerup', 'lizard
		3+		3		0		0 		1 		0		upgrade3', 'upgrade2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade1
		3+		3		0		0 		2 		0		upgrade3', 'attack2', 'defense2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		0		0 		3 		0		attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		0		1		0		0		upgrade3', 'upgrade2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade1
		3+		3		0		1		1		0		upgrade3', 'upgrade2', 'attack1', 'powerup', 'lizard', 'upgrade1
		3+		3		0		1		2		0		upgrade3', 'attack2', 'defense2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		0		1		3		0		attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		0		2		0		0		upgrade3', 'attack2', 'speed2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		0		2		1		0		upgrade3', 'attack2', 'speed2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		0		2		2		0		upgrade3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		0		2		3		0		attack3', 'defense3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		0		3		0		0		attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		0		3		1		0		attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		0		3		2		0		attack3', 'speed3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		0		3		3		0		attack3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		1 		1 		0 		0		upgrade3', 'upgrade2', 'speed1', 'powerup', 'lizard', 'upgrade1
		3+		3		1 		2 		0 		0		upgrade3', 'speed2', 'attack2', 'speed1', 'powerup', 'lizard', 'upgrade1
		3+		3		1 		3 		0 		0		speed3', 'attack3', 'speed2', 'attack2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		2 		1 		0 		0		upgrade3', 'speed2', 'defense2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		2 		0 		0		upgrade3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		3 		0 		0		speed3', 'attack3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		1 		0 		0		speed3', 'defense3', 'speed2', 'defense2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		2 		0 		0		speed3', 'defense3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		3 		0 		0		speed3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1			
		3+		3		1 		0 		1 		0		upgrade3', 'upgrade2', 'defense1', 'powerup', 'lizard', 'upgrade1
		3+		3		1 		0 		2 		0		upgrade3', 'defense2', 'attack2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		1 		0 		3 		0		defense3', 'attack3', 'defense2', 'attack2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		2 		0 		1 		0		upgrade3', 'defense2', 'speed2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		0 		2 		0		upgrade3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		0 		3 		0		defense3', 'attack3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		0 		1 		0		defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		0 		2 		0		defense3', 'speed3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		0 		3 		0		defense3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		1 		0 		0 		0		upgrade3', 'upgrade2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		0 		0 		0		upgrade3', 'defense2', 'speed2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		3 		0 		0 		0		defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		1 		1 		1 		0		upgrade3', 'upgrade2', 'powerup', 'lizard', 'upgrade1
		3+		3		1 		1 		2 		0		upgrade3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		1 		1 		3 		0		attack3', 'defense3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		1 		2 		1 		0		upgrade3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		1 		2 		2 		0		upgrade3', 'attack2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		1 		2 		3 		0		attack3', 'defense3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		1 		3 		1 		0		attack3', 'speed3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		1 		3 		2 		0		attack3', 'speed3', 'attack2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		1 		3 		3 		0		attack3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		2 		1 		1 		0		upgrade3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		1 		2 		0		upgrade3', 'defense2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		1 		3 		0		defense3', 'attack3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		2 		2 		1 		0		upgrade3', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		2 		2 		0		upgrade3', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		2 		3 		0		attack3', 'defense3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		2 		3 		1 		0		attack3', 'speed3', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		3 		2 		0		attack3', 'speed3', 'powerup', 'lizard', 'upgrade2', 'upgrade1
		3+		3		2 		3 		3 		0		attack3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		1 		1 		0		defense3', 'speed3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		1 		2 		0		defense3', 'speed3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		1 		3 		0		defense3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		2 		1 		0		speed3', 'defense3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		2 		2 		0		defense3', 'speed3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		2 		3 		0		defense3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		3 		1 		0		speed3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		3 		2 		0		speed3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1
		3+		3		3 		3 		3 		0		powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1

	3+ lizards 3 energy 1 reserve

		3+		3		1 		1 		1 		1		upgrade3', 'upgrade2', 'powerup', 'lizard
		3+		3		1 		1 		2 		1		upgrade3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade2
		3+		3		1 		1 		3 		1		attack3', 'defense3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		1 		2 		1 		1		upgrade3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		3		1 		2 		2 		1		upgrade3', 'attack2', 'powerup', 'lizard', 'upgrade2
		3+		3		1 		2 		3 		1		attack3', 'defense3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		1 		3 		1 		1		attack3', 'speed3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		3		1 		3 		2 		1		attack3', 'speed3', 'attack2', 'powerup', 'lizard', 'upgrade2
		3+		3		1 		3 		3 		1		attack3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		2 		1 		1 		1		upgrade3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		3		2 		1 		2 		1		upgrade3', 'defense2', 'powerup', 'lizard', 'upgrade2
		3+		3		2 		1 		3 		1		defense3', 'attack3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		2 		2 		1 		1		upgrade3', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		3		2 		2 		2 		1		upgrade3', 'powerup', 'lizard', 'upgrade2
		3+		3		2 		2 		3 		1		attack3', 'defense3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		2 		3 		1 		1		attack3', 'speed3', 'speed2', 'powerup', 'lizard', 'upgrade2
		3+		3		2 		3 		2 		1		attack3', 'speed3', 'powerup', 'lizard', 'upgrade2
		3+		3		2 		3 		3 		1		attack3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		3 		1 		1 		1		defense3', 'speed3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		3 		1 		2 		1		defense3', 'speed3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		3 		1 		3 		1		defense3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		3 		2 		1 		1		speed3', 'defense3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		3 		2 		2 		1		defense3', 'speed3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		3 		2 		3 		1		defense3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		3 		3 		1 		1		speed3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		3 		3 		2 		1		speed3', 'powerup', 'lizard', 'upgrade3', 'upgrade2
		3+		3		3 		3 		3 		1		powerup', 'lizard', 'upgrade3', 'upgrade2

	3+ lizards 3 energy 2 reserve

		3+		3		1 		1 		1 		2		upgrade3', 'upgrade2', 'powerup', 'lizard
		3+		3		1 		1 		2 		2		upgrade3', 'attack2', 'defense2', 'powerup', 'lizard
		3+		3		1 		1 		3 		2		attack3', 'defense3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3
		3+		3		1 		2 		1 		2		upgrade3', 'attack2', 'speed2', 'powerup', 'lizard
		3+		3		1 		2 		2 		2		upgrade3', 'attack2', 'powerup', 'lizard
		3+		3		1 		2 		3 		2		attack3', 'defense3', 'attack2', 'powerup', 'lizard', 'upgrade3
		3+		3		1 		3 		1 		2		attack3', 'speed3', 'attack2', 'speed2', 'powerup', 'lizard
		3+		3		1 		3 		2 		2		attack3', 'speed3', 'attack2', 'powerup', 'lizard
		3+		3		1 		3 		3 		2		attack3', 'attack2', 'powerup', 'lizard', 'upgrade3
		3+		3		2 		1 		1 		2		upgrade3', 'defense2', 'speed2', 'powerup', 'lizard
		3+		3		2 		1 		2 		2		upgrade3', 'defense2', 'powerup', 'lizard
		3+		3		2 		1 		3 		2		defense3', 'attack3', 'defense2', 'powerup', 'lizard', 'upgrade3
		3+		3		2 		2 		1 		2		upgrade3', 'speed2', 'powerup', 'lizard
		3+		3		2 		2 		2 		2		upgrade3', 'powerup', 'lizard
		3+		3		2 		2 		3 		2		attack3', 'defense3', 'powerup', 'lizard', 'upgrade3
		3+		3		2 		3 		1 		2		attack3', 'speed3', 'speed2', 'powerup', 'lizard
		3+		3		2 		3 		2 		2		attack3', 'speed3', 'powerup', 'lizard
		3+		3		2 		3 		3 		2		attack3', 'powerup', 'lizard', 'upgrade3
		3+		3		3 		1 		1 		2		defense3', 'speed3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3
		3+		3		3 		1 		2 		2		defense3', 'speed3', 'defense2', 'powerup', 'lizard', 'upgrade3
		3+		3		3 		1 		3 		2		defense3', 'defense2', 'powerup', 'lizard', 'upgrade3
		3+		3		3 		2 		1 		2		speed3', 'defense3', 'speed2', 'powerup', 'lizard', 'upgrade3
		3+		3		3 		2 		2 		2		defense3', 'speed3', 'powerup', 'lizard', 'upgrade3
		3+		3		3 		2 		3 		2		defense3', 'powerup', 'lizard', 'upgrade3
		3+		3		3 		3 		1 		2		speed3', 'speed2', 'powerup', 'lizard', 'upgrade3
		3+		3		3 		3 		2 		2		speed3', 'powerup', 'lizard', 'upgrade3
		3+		3		3 		3 		3 		2		powerup', 'lizard', 'upgrade3

	3+ lizards 3 energy 3 reserve

		3+		3		1 		1 		1 		3		upgrade3', 'upgrade2', 'powerup', 'lizard
		3+		3		1 		1 		2 		3		upgrade3', 'attack2', 'defense2', 'powerup', 'lizard
		3+		3		1 		1 		3 		3		attack3', 'defense3', 'attack2', 'defense2', 'powerup', 'lizard
		3+		3		1 		2 		1 		3		upgrade3', 'attack2', 'speed2', 'powerup', 'lizard
		3+		3		1 		2 		2 		3		upgrade3', 'attack2', 'powerup', 'lizard
		3+		3		1 		2 		3 		3		attack3', 'defense3', 'attack2', 'powerup', 'lizard
		3+		3		1 		3 		1 		3		attack3', 'speed3', 'attack2', 'speed2', 'powerup', 'lizard
		3+		3		1 		3 		2 		3		attack3', 'speed3', 'attack2', 'powerup', 'lizard
		3+		3		1 		3 		3 		3		attack3', 'attack2', 'powerup', 'lizard
		3+		3		2 		1 		1 		3		upgrade3', 'defense2', 'speed2', 'powerup', 'lizard
		3+		3		2 		1 		2 		3		upgrade3', 'defense2', 'powerup', 'lizard
		3+		3		2 		1 		3 		3		defense3', 'attack3', 'defense2', 'powerup', 'lizard
		3+		3		2 		2 		1 		3		upgrade3', 'speed2', 'powerup', 'lizard
		3+		3		2 		2 		2 		3		upgrade3', 'powerup', 'lizard
		3+		3		2 		2 		3 		3		attack3', 'defense3', 'powerup', 'lizard
		3+		3		2 		3 		1 		3		attack3', 'speed3', 'speed2', 'powerup', 'lizard
		3+		3		2 		3 		2 		3		attack3', 'speed3', 'powerup', 'lizard
		3+		3		2 		3 		3 		3		attack3', 'powerup', 'lizard
		3+		3		3 		1 		1 		3		defense3', 'speed3', 'defense2', 'speed2', 'powerup', 'lizard
		3+		3		3 		1 		2 		3		defense3', 'speed3', 'defense2', 'powerup', 'lizard
		3+		3		3 		1 		3 		3		defense3', 'defense2', 'powerup', 'lizard
		3+		3		3 		2 		1 		3		speed3', 'defense3', 'speed2', 'powerup', 'lizard
		3+		3		3 		2 		2 		3		defense3', 'speed3', 'powerup', 'lizard
		3+		3		3 		2 		3 		3		defense3', 'powerup', 'lizard
		3+		3		3 		3 		1 		3		speed3', 'speed2', 'powerup', 'lizard
		3+		3		3 		3 		2 		3		speed3', 'powerup', 'lizard
		3+		3		3 		3 		3 		3		powerup', 'lizard

		**************************************************************************************************************/

		// existing player cards
		let l = $.grep(player.cards, function(e){return e.type == 'lizard';});
		let ll = l.length;
		let e = $.grep(player.cards, function(e){return e.part == 'energy';});
		let el = e.length;
		let ed = 0;
		if(el>0) ed = e[0].desirability;
		let r = player.reserve;
		let rl = $.isEmptyObject(r[0]) ? 0 : 1;
		let rd = 0;
		if(rl) rd = r[0].desirability;
		let u = $.grep(player.cards, function(e){return e.type == 'upgrade';});
		let ul = u.length;
		let ud = 0;
		if(ul>0) ud = u[0].desirability;
		let a = $.grep(player.cards, function(e){return e.part == 'attack';});
		let al = a.length;
		let ad = 0;
		if(al>0) ad = a[0].desirability;
		let d = $.grep(player.cards, function(e){return e.part == 'defense';});
		let dl = d.length;
		let dd = 0;
		if(dl>0) dd = d[0].desirability;
		let s = $.grep(player.cards, function(e){return e.part == 'speed';});
		let sl = s.length;
		let sd = 0;
		if(sl>0) sd = s[0].desirability;

		// do the main AI work

		wanted.push('permanent', 'trap'); // permanent and trap powerups are always the most desirable cards

		// no lizards
		if(ll==0) {
			// no energy
			if(el==0) {
				// no upgrades
				if(ul==0) { 
					wanted.push('lizard', 'energy3', 'upgrade3', 'energy2', 'upgrade2', 'energy1', 'upgrade1');
				// upgrades
				} else {
					// upgrade3
					if(ud==3) { 
						wanted.push('lizard', 'energy3', 'energy2', 'energy1');
					// upgrade2
					} else if(ud==2) { 	
						wanted.push('lizard', 'energy3', 'upgrade3', 'energy2', 'energy1');
					// upgrade1
					} else { 
						wanted.push('lizard', 'energy3', 'upgrade3', 'energy2', 'upgrade2', 'energy1');
					}
				}
			// energy
			} else {
				// no upgrades
				if(ul==0) {
					// energy3
					if(ed==3) {
						wanted.push('lizard', 'upgrade3', 'upgrade2', 'upgrade1');
					// energy2
					} else if(ed==2) {
						wanted.push('lizard', 'upgrade3', 'energy3', 'upgrade2', 'upgrade1');
					// energy1
					} else {
						wanted.push('lizard', 'upgrade3', 'energy3', 'upgrade2', 'upgrade1', 'energy1');
					}
				// upgrades
				} else {
					// energy3
					if(ed==3) {
						// upgrade3
						if(ud==3) { 
							wanted.push('lizard');
						// upgrade2
						} else if(ud==2) { 	
							wanted.push('lizard', 'upgrade3');
						// upgrade1
						} else { 
							wanted.push('lizard', 'upgrade3', 'upgrade2');
						}
					// energy2
					} else if(ed==2) {
						// upgrade3
						if(ud==3) { 
							wanted.push('lizard', 'energy3');
						// upgrade2
						} else if(ud==2) { 	
							wanted.push('lizard', 'energy3', 'upgrade3');
						// upgrade1
						} else { 
							wanted.push('lizard', 'upgrade3', 'upgrade2', 'energy3');
						}
					// energy1
					} else {
						// upgrade3
						if(ud==3) { 
							wanted.push('lizard', 'energy3', 'energy2');
						// upgrade2
						} else if(ud==2) { 	
							wanted.push('lizard', 'energy3', 'upgrade3', 'energy2');
						// upgrade1
						} else { 
							wanted.push('lizard', 'upgrade3', 'energy3', 'upgrade2', 'energy2');
						}
					}
				}
			}
		// 1 lizard
		} else if(ll==1) {
			// no energy
			if(el==0) {
				// no reserve 
				if(rl==0) {
					// no upgrades
					if(ul==0) { 
						wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'energy1', 'lizard');
					} else {
						// no attack
						if(al==0) {
							// no defense 
							if(dl==0) {
								if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack1
						} else if(ad==1) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack2
						} else if(ad==2) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack3
						} else {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						}
					}
				// reserve1
				} else if(rd==1) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					}
				// reserve2	
				} else if(rd==2) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						}
					}
				// reserve3
				} else {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'lizard');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'energy1', 'lizard');
							}
						}
					}
				}
			// energy1+ -- only 1 energy needed when only 1 lizard is owned
			} else {
				// no reserve 
				if(rl==0) {
					// no upgrades
					if(ul==0) { 
						wanted.push('upgrade3', 'upgrade2', 'upgrade1', 'lizard');
					} else {
						// no attack
						if(al==0) {
							// no defense 
							if(dl==0) {
								// speed1 
								if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'attack1', 'defense1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'defense2', 'attack1', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'upgrade2', 'attack1', 'speed1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'attack1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'defense2', 'attack1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'attack2', 'speed2', 'attack1', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'attack2', 'speed2', 'attack1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'attack1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack1
						} else if(ad==1) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'upgrade2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'defense1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'defense2', 'attack2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'defense2', 'attack2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'upgrade2', 'speed1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'defense2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'speed2', 'attack2', 'speed1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'attack2', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'speed2', 'attack2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'attack2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'attack2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack2
						} else if(ad==2) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'defense2', 'speed2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'defense2', 'speed2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'defense2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'speed2', 'defense2', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'defense2', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'defense2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'speed2', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack3
						} else {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'speed2', 'defense2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'defense3', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('speed3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						}
					}
				// reserve1
				} else if(rd==1) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'upgrade2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'defense2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'attack2', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'attack2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'attack2', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'defense2', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'defense2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'defense2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'defense2', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'defense2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'speed2', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'speed2', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('lizard', 'upgrade3', 'upgrade2');
							}
						}
					}
				// reserve2	
				} else if(rd==2) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'upgrade2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'defense2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'attack2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'attack2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'attack2', 'lizard', 'upgrade3');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'defense2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'defense2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'defense2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'lizard', 'upgrade3');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'defense2', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'defense2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'speed2', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'speed2', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('lizard', 'upgrade3');
							}
						}
					}
				// reserve3
				} else {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'upgrade2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'defense2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'attack2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'attack2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'attack2', 'lizard');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'defense2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'defense2', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'defense2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'lizard');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'defense2', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'defense2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'lizard');
							// speed3
							} else {
								wanted.push('lizard');
							}
						}
					}
				}
			}
		// 2 lizards
		} else if(ll==2) {
			// no energy
			if(el==0) {
				// no reserve 
				if(rl==0) {
					// no upgrades
					if(ul==0) { 
						wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'energy1', 'lizard');
					} else {
						// no attack
						if(al==0) {
							// no defense 
							if(dl==0) {
								// speed1 
								if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack1
						} else if(ad==1) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack2
						} else if(ad==2) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack3
						} else {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// speed1 
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						}
					}
				// reserve1
				} else if(rd==1) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'energy1', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					}
				// reserve2	
				} else if(rd==2) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'energy1', 'lizard', 'upgrade3');
							}
						}
					}
				// reserve3
				} else {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'lizard');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'lizard');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'lizard');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'energy1', 'lizard');
							}
						}
					}
				}
			// energy1
			} else if(ed==1) {
				// no reserve 
				if(rl==0) {
					// no upgrades
					if(ul==0) { 
						wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'lizard');
					} else {
						// no attack
						if(al==0) {
							// no defense 
							if(dl==0) {
								// speed1 
								if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack1
						} else if(ad==1) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack2
						} else if(ad==2) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack3
						} else {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('speed3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						}
					}
				// reserve1
				} else if(rd==1) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					}
				// reserve2	
				} else if(rd==2) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade3');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'lizard', 'upgrade3');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'lizard', 'upgrade3');
							}
						}
					}
				// reserve3
				} else {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'lizard');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'lizard');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'lizard');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'lizard');
							}
						}
					}
				}
			// energy2+ -- only 2 energy needed when only 2 lizards are owned
			} else {
				// no reserve 
				if(rl==0) {
					// no upgrades
					if(ul==0) { 
						wanted.push('upgrade3', 'upgrade2', 'upgrade1', 'lizard');
					} else {
						// no attack
						if(al==0) {
							// no defense 
							if(dl==0) {
								// speed1 
								if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'attack1', 'defense1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'defense2', 'attack1', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'upgrade2', 'attack1', 'speed1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'attack1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'defense2', 'attack1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'attack2', 'speed2', 'attack1', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'attack2', 'speed2', 'attack1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'attack1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'attack2', 'attack1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack1
						} else if(ad==1) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'upgrade2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'defense1', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'defense2', 'attack2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'defense2', 'attack2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'upgrade2', 'speed1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'defense2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'speed2', 'attack2', 'speed1', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'attack2', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'speed2', 'attack2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'attack2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'attack2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack2
						} else if(ad==2) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'defense2', 'speed2', 'defense1', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'defense2', 'speed2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'defense2', 'defense1', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'speed2', 'defense2', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'defense2', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'defense2', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'speed2', 'speed1', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'speed2', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack3
						} else {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'defense2', 'defense1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'speed2', 'defense2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'defense2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'defense3', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'speed2', 'speed1', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'speed2', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('speed3', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						}
					}
				// reserve1
				} else if(rd==1) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'upgrade2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'defense2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'attack2', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'attack2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'attack2', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'defense2', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'defense2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'defense2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'speed2', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'defense2', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'defense2', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'speed2', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'speed2', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('lizard', 'upgrade3', 'upgrade2');
							}
						}
					}
				// reserve2	
				} else if(rd==2) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'upgrade2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'defense2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'attack2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'attack2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'attack2', 'lizard', 'upgrade3');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'defense2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'defense2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'defense2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'lizard', 'upgrade3');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'defense2', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'defense2', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'speed2', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'speed2', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('lizard', 'upgrade3');
							}
						}
					}
				// reserve3
				} else {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'upgrade2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'defense2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'attack2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'attack2', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'attack2', 'lizard');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'defense2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'defense2', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'defense2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'lizard');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'defense2', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'defense2', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'speed2', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'lizard');
							// speed3
							} else {
								wanted.push('lizard');
							}
						}
					}
				}
			}
		// 3+ lizards --- use same logic for 3 or more lizards since 3 is the optimal number
		} else if(ll>=3) {
			// we're putting the powerup in front of lizard in this case
			appendpowerup = false;
			// no energy
			if(el==0) {
				// no reserve 
				if(rl==0) {
					// no upgrades
					if(ul==0) { 
						wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'energy1', 'powerup', 'lizard');
					} else {
						// no attack
						if(al==0) {
							// no defense 
							if(dl==0) {
								// speed1 
								if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack1
						} else if(ad==1) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack2
						} else if(ad==2) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack3
						} else {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						}
					}
				// reserve1
				} else if(rd==1) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					}
				// reserve2	
				} else if(rd==2) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade3');
							}
						}
					}
				// reserve3
				} else {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'energy1', 'powerup', 'lizard');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'energy1', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'energy1', 'powerup', 'lizard');
							}
						}
					}
				}
			// energy1
			} else if(ed==1) {
				// no reserve 
				if(rl==0) {
					// no upgrades
					if(ul==0) { 
						wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'upgrade1', 'powerup', 'lizard');
					} else {
						// no attack
						if(al==0) {
							// no defense 
							if(dl==0) {
								// speed1 
								if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack1
						} else if(ad==1) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack2
						} else if(ad==2) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack3
						} else {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						}
					}
				// reserve1
				} else if(rd==1) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					}
				// reserve2	
				} else if(rd==2) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'powerup', 'lizard', 'upgrade3');
							}
						}
					}
				// reserve3
				} else {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'energy2', 'energy2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'energy2', 'powerup', 'lizard');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'energy2', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'energy2', 'powerup', 'lizard');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'energy2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'energy2', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'energy2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'energy2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('energy3', 'energy2', 'powerup', 'lizard');
							}
						}
					}
				}
			// energy2
			} else if(ed==2) {
				// no reserve 
				if(rl==0) {
					// no upgrades
					if(ul==0) { 
						wanted.push('upgrade3', 'energy3', 'upgrade2', 'upgrade1', 'powerup', 'lizard');
					} else {
						// no attack
						if(al==0) {
							// no defense 
							if(dl==0) {
								// speed1 
								if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'attack1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack1
						} else if(ad==1) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'defense1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'attack2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'attack2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'speed1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'upgrade2', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'attack2', 'speed1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'attack2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack2
						} else if(ad==2) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'defense2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'energy3', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'energy3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack3
						} else {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'defense2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'energy3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('speed3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						}
					}
				// reserve1
				} else if(rd==1) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('energy3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					}
				// reserve2	
				} else if(rd==2) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade3');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'powerup', 'lizard', 'upgrade3');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('energy3', 'powerup', 'lizard', 'upgrade3');
							}
						}
					}
				// reserve3
				} else {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'upgrade2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'defense2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'attack2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'attack2', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'attack2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'attack2', 'powerup', 'lizard');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'defense2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'energy3', 'defense2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'energy3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'energy3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'energy3', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'energy3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'energy3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'energy3', 'powerup', 'lizard');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'defense2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'defense2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'energy3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'energy3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'energy3', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'energy3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'energy3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('energy3', 'powerup', 'lizard');
							}
						}
					}
				}
			// energy3
			} else {
				// no reserve 
				if(rl==0) {
					// no upgrades
					if(ul==0) { 
						wanted.push('upgrade3', 'upgrade2', 'upgrade1', 'powerup', 'lizard');
					} else {
						// no attack
						if(al==0) {
							// no defense 
							if(dl==0) {
								// speed1 
								if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'defense2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'upgrade2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'attack1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'defense2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'attack2', 'speed2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'attack2', 'speed2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'attack2', 'attack1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack1
						} else if(ad==1) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'upgrade2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'defense1', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'defense2', 'attack2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'defense2', 'attack2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'upgrade2', 'speed1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'upgrade2', 'powerup', 'lizard', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'speed2', 'attack2', 'speed1', 'powerup', 'lizard', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'attack2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'speed2', 'attack2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'attack2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack2
						} else if(ad==2) {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'defense2', 'speed2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'defense2', 'speed2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'speed2', 'defense2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'defense2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'attack3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('upgrade3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('upgrade3', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('upgrade3', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'defense3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'attack3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('attack3', 'speed3', 'speed2', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('attack3', 'speed3', 'powerup', 'lizard', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('attack3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						// attack3
						} else {
							// no defense 
							if(dl==0) {
								// no speed
								if(sl==0) {
									wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'defense2', 'defense1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense1
							} else if(dd==1) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'speed2', 'defense2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense2
							} else if(dd==2) {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'defense3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'defense3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('defense3', 'speed3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('defense3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							// defense3
							} else {
								// no speed
								if(sl==0) {
									wanted.push('speed3', 'speed2', 'speed1', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed1 
								} else if(sd==1) {
									wanted.push('speed3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed2
								} else if(sd==2) {
									wanted.push('speed3', 'powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								// speed3
								} else {
									wanted.push('powerup', 'lizard', 'upgrade3', 'upgrade2', 'upgrade1');
								}
							}
						}
					}
				// reserve1
				} else if(rd==1) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'upgrade2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'attack2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'attack2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'defense2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'speed2', 'powerup', 'lizard', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'defense2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'speed2', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'powerup', 'lizard', 'upgrade3', 'upgrade2');
							// speed3
							} else {
								wanted.push('powerup', 'lizard', 'upgrade3', 'upgrade2');
							}
						}
					}
				// reserve2	
				} else if(rd==2) {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'upgrade2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'defense2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'attack2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'attack2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'attack2', 'powerup', 'lizard', 'upgrade3');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'defense2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'defense2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'defense2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'powerup', 'lizard', 'upgrade3');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'defense2', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'defense2', 'powerup', 'lizard', 'upgrade3');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'speed2', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('defense3', 'powerup', 'lizard', 'upgrade3');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'speed2', 'powerup', 'lizard', 'upgrade3');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'powerup', 'lizard', 'upgrade3');
							// speed3
							} else {
								wanted.push('powerup', 'lizard', 'upgrade3');
							}
						}
					}
				// reserve3
				} else {
					// attack1
					if(ad==1) {
						// defense1 
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'upgrade2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'defense2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'defense2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'attack2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'attack2', 'powerup', 'lizard', 'upgrade2');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'attack2', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'attack2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'attack2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'attack2', 'powerup', 'lizard');
							}
						}
					// attack2
					} else if(ad==2) {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'defense2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'defense2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'attack3', 'defense2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('upgrade3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('upgrade3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'defense3', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('attack3', 'speed3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('attack3', 'speed3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('attack3', 'powerup', 'lizard');
							}
						}
					// attack3
					} else {
						// defense1
						if(dd==1) {
							// speed1 
							if(sd==1) {
								wanted.push('defense3', 'speed3', 'defense2', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'defense2', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'defense2', 'powerup', 'lizard');
							}
						// defense2
						} else if(dd==2) {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'defense3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('defense3', 'speed3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('defense3', 'powerup', 'lizard');
							}
						// defense3
						} else {
							// speed1 
							if(sd==1) {
								wanted.push('speed3', 'speed2', 'powerup', 'lizard');
							// speed2
							} else if(sd==2) {
								wanted.push('speed3', 'powerup', 'lizard');
							// speed3
							} else {
								wanted.push('powerup', 'lizard');
							}
						}
					}
				}
			}
		}

		if(appendpowerup) wanted.push('powerup'); // discard powerups are least desirable cards except for 3+ lizards
		