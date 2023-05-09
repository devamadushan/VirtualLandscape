import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Mars extends AbstractForm {
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

  Mars(ctx, dx, dy) {
    let ox = dx
    let oy = (this.pesanteur) ? ctx.canvas.height - this.height : dy
    

    let radial = ctx.createRadialGradient(150, 280, 20, 150, 290, 300); //le point Centre "Rouge"

    radial.addColorStop(0, '#F99B22'); //Jaune
    radial.addColorStop(1, '#D33E3B'); //Rouge

    let contour = ctx.createRadialGradient(ox + 50, oy + 270, 120, ox + 50, oy + 140, 3); // Contour blanc
    contour.addColorStop(0, 'rgba(255, 250, 0, 0)');
    contour.addColorStop(0.8, 'rgba(255, 135, 45, 0.9)');
    contour.addColorStop(1, 'rgba(275, 155, 90, 0)');
    //ctx.fillStyle = contour;
   //ctx.fillRect(ox + 2 - 280, oy + 190 - 280, 330, 190);

    ctx.beginPath();
    ctx.arc(ox + 50, oy + 325-150, 30, 0, Math.PI * 2, true);  // Mercure
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath;
    

    ctx.beginPath();




    //for (let i = 0; i <= ~~(Math.random() * 59); i++)
    //ctx.arc(ox + ~~(Math.random() * 20)+40 , oy + ~~(Math.random() * 15) + 170, ~~(Math.random() * 9), 0, Math.PI * ~~(Math.random() * 2), true);
    //ctx.arc(ox+ 14 + 35, oy + 170 , 19, 19,  10000, Math.PI *  2, true);
    ctx.ellipse(ox + 50, oy + 325-150 , 30, ~~(Math.random() * 10)+3,  ~~(Math.random() * 77),  ~~(Math.random() * 77), Math.PI * 1);
    ctx.fillStyle = contour;
    ctx.fill();
    ctx.strokeStyle = contour;
    ctx.stroke();

  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.Mars(ctx, this.x, this.y)

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
    forms.push(new Mars( ~~(Math.random() * 1100 ), 100, 10, 10, '', 'white', 1, false, ~~(Math.random() * 5)))
    // forms.push(new Mercure ())
    console.log('nb de smileys : ' + forms.length)

    // retourne un tableau d'objets de type Smiley
    return forms
  }

}
