import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Etoiles extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }

  Etoiles(ctx, dx, dy) {
    let ox = dx
    let oy = (this.pesanteur) ? ctx.canvas.height - this.height : dy
    
for (let i = 0; i <= ~~(Math.random() * 10000090); i++){
    let x =Math.random() * 5000;
    let y =Math.random() * 5000;
    let radius = 1;
    let couleur = 'white';

    

    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fillStyle = couleur;
    ctx.fill();
    ctx.beginPath();
}

  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.Etoiles(ctx, this.x, this.y)

    // restores the styles from earlier
    // preventing the colors used here
    // from polluting other drawings
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Triangle,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    let forms = []
    // ~~(Math.random() * 5) + 5 // max in [5..10]
    //forms.push(new Soleil(100, 100, 100, 100, 'red', 'red', 1, true, 50))
    forms.push(new Etoiles(600, 100, 100, 100, '1', 'white', 7, false, 1))

    console.log('nb de smileys : ' + forms.length)

    // retourne un tableau d'objets de type Smiley
    return forms
  }

}
