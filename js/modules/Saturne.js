import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Saturne extends AbstractForm {
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

  Saturne(ctx, dx, dy) {
    let ox = dx
    let oy = (this.pesanteur) ? ctx.canvas.height - this.height : dy
    // si pesenteur pousse l'objet au bas de l'écran

    // TODO prendre en compte this.fillColor et autres propriétés de l'objet (voir la classe de base)
    // prendre exemple sur Triangle.js

    let radial = ctx.createRadialGradient(150, 280, 20, 150, 290, 300); //le point Centre "Rouge"

    radial.addColorStop(0, 'BLACK'); //Jaune
    radial.addColorStop(1, '#CEC3AF '); //Rouge


    ctx.beginPath();
    ctx.arc(ox + 50, oy + 325 - 150, 55, 0, Math.PI * 2, true);  // Mercure
    ctx.fillStyle = radial;
    ctx.fill();
    ctx.strokeStyle = `rgba(0,0,0,0)` //Contour du Mecure "couleur"
    ctx.closePath;

    ctx.beginPath();
    for (let i = 0; i <= ~~(Math.random() * 59); i++)
    ctx.ellipse(ox + 55, oy + 210, ~~(Math.random() * 15)+4, ~~(Math.random() * 2)+3, 0, 0, Math.PI * 2)
    //ctx.arc(ox + ~~(Math.random() * 20) + 40, oy + ~~(Math.random() * 15) + 190, ~~(Math.random() * 20)+14, 0, Math.PI * ~~(Math.random() * 2), true);
    ctx.fillStyle = '#E2B361 ';
    ctx.fill();
   
    ctx.beginPath();
    ctx.ellipse(ox + 50, oy + 175, 87, 9, ~~(Math.random() * 9), 6, Math.PI * 1)
    ctx.fillStyle = `#F99B22`;
    ctx.fill();
    ctx.beginPath();
    ctx.stroke();


    /* let contour = ctx.createRadialGradient(ox + 50, oy + 170, 90, ox + 50, oy + 170, 25);//Contour couleur  
     contour.addColorStop(0, 'rgba(255, 250, 0, 0)');
     contour.addColorStop(0.8, 'rgba(0,0,0, 0.7)');
     contour.addColorStop(1, 'rgba(275, 155, 90, 0)');
     ctx.fillStyle = contour;
     ctx.fillRect(ox + 50 - 280, oy + 170 - 280, 690, 590);  //contour
    *
 
 
     /*let contour = ctx.createRadialGradient(ox + 50, oy + 170, 190, ox + 50, oy + 170, 303); // Contour blanc
     contour.addColorStop(0, 'rgba(255, 255, 255, 0)');
     contour.addColorStop(0.8, 'rgba(255, 255, 255, 0.2)');
     contour.addColorStop(1, 'rgba(275, 255, 255, 0)');
     ctx.fillStyle = contour;
     ctx.fillRect(ox + 50 - 280, oy + 170 - 280, 690, 590);
 */

  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.Saturne(ctx, this.x, this.y)

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
    forms.push(new Saturne(~~(Math.random() * 1100 ), 100, 10, 10, '', 'white', 1, false, ~~(Math.random() * 9)))
    // forms.push(new Mercure ())
    console.log('nb de smileys : ' + forms.length)

    // retourne un tableau d'objets de type Smiley
    return forms
  }

}
