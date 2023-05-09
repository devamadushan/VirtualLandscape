import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Soleil extends AbstractForm {
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

  soleil(ctx, dx, dy) {
    let ox = dx
    let oy = (this.pesanteur) ? ctx.canvas.height - this.height : dy
    // si pesenteur pousse l'objet au bas de l'écran

    // TODO prendre en compte this.fillColor et autres propriétés de l'objet (voir la classe de base)
    // prendre exemple sur Triangle.js

    let radial = ctx.createRadialGradient(150, 280, 20, 150, 290, 300); //le point Centre "Rouge"

    radial.addColorStop(0, 'white'); //Jaune
    radial.addColorStop(1, 'yellow'); //Rouge

    ctx.beginPath();
    ctx.arc(ox + 50, oy + 170, 250, 0, Math.PI * 2, true);  // Soleil
    ctx.fillStyle = radial;

    ctx.fill();
    ctx.strokeStyle = `rgba(0,0,0,0)` //Contour du Soleil
    ctx.stroke();


    let contourJ = ctx.createRadialGradient(ox + 50, oy + 170, 150, ox + 50, oy + 170, 280);//Contour couleur jaune 
    contourJ.addColorStop(0, 'rgba(255, 250, 0, 0)');
    contourJ.addColorStop(0.8, 'rgba(255, 155, 45, 0.7)');
    contourJ.addColorStop(1, 'rgba(275, 155, 90, 0)');
    ctx.fillStyle = contourJ;
    ctx.fillRect(ox -380, oy + 120 - 280, 800, 690);

    let contour = ctx.createRadialGradient(ox + 50, oy + 170, 190, ox + 50, oy + 170, 303); // Contour blanc
    contour.addColorStop(0, 'rgba(255, 255, 255, 0)');
    contour.addColorStop(0.8, 'rgba(255, 255, 255, 0.2)');
    contour.addColorStop(1, 'rgba(275, 255, 255, 0)');
    ctx.fillStyle = contour;
    ctx.fillRect(ox + 20 - 280, oy + 155 - 280, 690, 690);


  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    this.soleil(ctx, this.x, this.y)

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
    forms.push(new Soleil(600, 100, 100, 100, '1', 'white', 7, false, ~~(Math.random() * 9)+1))

    console.log('nb de smileys : ' + forms.length)

    // retourne un tableau d'objets de type Smiley
    return forms
  }

}
