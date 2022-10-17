
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.x
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background_fada0246
		const background_fada0246 = this.add.image(400, 300, "Background.fada0246");
		background_fada0246.scaleX = 0.5;
		background_fada0246.scaleY = 0.7;

		// table_c73cfcec
		const table_c73cfcec = this.add.image(400, 300, "Table.c73cfcec");
		table_c73cfcec.scaleX = 0.7;
		table_c73cfcec.scaleY = 0.7;
		table_c73cfcec.setOrigin(1, 0.5);

		// table_c73cfcec_1
		const table_c73cfcec_1 = this.add.image(400, 300, "Table.c73cfcec");
		table_c73cfcec_1.scaleX = -0.7;
		table_c73cfcec_1.scaleY = 0.7;
		table_c73cfcec_1.setOrigin(1, 0.5);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.x = prompt("Enter input between 1 to 6")
		if (this.x == 1) {
			this.getImage(336, 357)
		}
		if (this.x == 2) {
			this.getImage(336, 88)
			this.getImage(336, 357)
		}
		if (this.x == 3) {
			this.getImage(336, 88)
			this.getImage(38, 357)
			this.getImage(606, 357)
		}
		if (this.x == 4) {
			this.getImage(38, 88)
			this.getImage(38, 357)
			this.getImage(606, 357)
			this.getImage(606, 88)
		}
		if (this.x == 5) {
			this.getImage(38, 88)
			this.getImage(38, 357)
			this.getImage(336, 357)
			this.getImage(606, 357)
			this.getImage(606, 88)
		}
		if (this.x == 6) {
			this.getImage(38, 88)
			this.getImage(38, 357)
			this.getImage(336, 357)
			this.getImage(606, 357)
			this.getImage(606, 88)
			this.getImage(336, 88)
		}
	}

	getImage(x, y) {
		const userDisplayPrefab = new UserDisplayPrefab(this, x, y);
		this.add.existing(userDisplayPrefab);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
