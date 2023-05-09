import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Uranus extends AbstractForm {
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

  Uranus(ctx, dx, dy) {
    let ox = dx
    let oy = (this.pesanteur) ? ctx.canvas.height - this.height : dy

    // si pesenteur pousse l'objet au bas de l'écran

    // TODO prendre en compte this.fillColor et autres propriétés de l'objet (voir la classe de base)
    // prendre exemple sur Triangle.js

    let radial = ctx.createRadialGradient(150, 280, 20, 150, 290, 300); //le point Centre "Rouge"

    radial.addColorStop(0, 'BLACK'); //Jaune
    radial.addColorStop(1, '#0890F1'); //Rouge

    ctx.beginPath();
    ctx.arc(ox + 50, oy +325-150, 49, 0, Math.PI * 2, true);  // Mercure
    ctx.fillStyle = radial;
    ctx.fill();
    ctx.strokeStyle = `rgba(0,0,0,0)` //Contour du Mecure "couleur"
    ctx.closePath;
    ctx.beginPath();
    ctx.arc(ox + 30, oy + 160-150, 10, 26, true);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.beginPath();

   // for (let i = 0; i <= ~~(Math.random() * 59); i++)
      //ctx.arc(ox + ~~(Math.random() * 20)+40 , oy + ~~(Math.random() * 15) + 325-150, ~~(Math.random() * 9), 0, Math.PI * ~~(Math.random() * 2), true);
      //ctx.arc(ox + ~~(Math.random() * 20) + 40, oy + ~~(Math.random() * 15) + 190, ~~(Math.random() * 20)+14, 0, Math.PI * ~~(Math.random() * 2), true);
      ctx.ellipse(ox + 50, oy + 325-150 , 66, 9, ~~(Math.random() * 59), 0, Math.PI * 1);
      ctx.fillStyle = `rgba(255,255,255,0.3)`;
      ctx.fill();
      ctx.strokeStyle = `rgba(0,0,0,0)`;
      ctx.stroke();
  
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.Uranus(ctx, this.x, this.y)

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
    forms.push(new Uranus( ~~(Math.random() * 1100 ), 100, 10, 10, '', 'white', 1, false, ~~(Math.random() * 9)))
   // forms.push(new Mercure ())
    console.log('nb de smileys : ' + forms.length)

    // retourne un tableau d'objets de type Smiley
    return forms
  }

}
