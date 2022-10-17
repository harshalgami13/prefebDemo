
// You can write more code here

/* START OF COMPILED CODE */

class UserDisplayPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// profileMask
		const profileMask = scene.add.image(0, 0, "profileMask");
		profileMask.setOrigin(0, 0);
		this.add(profileMask);

		// defaultProfile
		const defaultProfile = scene.add.image(0, 0, "defaultProfile");
		defaultProfile.setOrigin(0, 0);
		this.add(defaultProfile);

		this.profileMask = profileMask;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.x
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	profileMask;

	/* START-USER-CODE */

	// Write your code here.
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
