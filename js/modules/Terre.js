import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un triangle
 */
export class Terre extends AbstractForm {
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

  Terre(ctx, dx, dy) {
    let ox = dx
    let oy = (this.pesanteur) ? ctx.canvas.height - this.height : dy
    

    let radial = ctx.createRadialGradient(150, 280, 20, 150, 290, 300); //le point Centre "Rouge"
    radial.addColorStop(0, 'BLACK'); //Jaune
    radial.addColorStop(1, '#0890F1'); //Rouge

    ctx.beginPath();
    ctx.arc(ox + 50, oy + 325-150,40, 0, Math.PI * 2, true);  // Mercure
    ctx.fillStyle = radial;
    ctx.fill();
    ctx.strokeStyle = `rgba(0,0,0,0)` //Contour du Mecure "couleur"
    ctx.closePath;
    ctx.beginPath();

    for (let i = 0; i <= ~~(Math.random() * 59); i++)
     
        ctx.moveTo(ox + 20, oy + 305-150);
    ctx.lineTo(ox + 40, oy + 290-150);
    ctx.lineTo(ox + 60, oy + 295-150);
    ctx.lineTo(ox + 60, oy + 305-150);
    ctx.lineTo(ox + 50, oy + 308-150);
    ctx.lineTo(ox + 47, oy + 305-150);
    ctx.lineTo(ox + 34, oy + 305-150);
    ctx.lineTo(ox + 22, oy + 330-150);
      
    //ctx.lineTo(ox + 40, oy + 150);
    ctx.moveTo(ox + 27, oy + 175+155-150);
    ctx.lineTo(ox + 49, oy + 165+155-150);
    ctx.lineTo(ox + 60, oy + 170+155-150);
    ctx.lineTo(ox + 49, oy + 186+155-150);
    ctx.lineTo(ox + 50, oy + 200+155-150);
    //ctx.lineTo(280, 100);
    //ctx.lineTo(260, 50);
    ctx.moveTo(ox + 80, oy + 160+155-150);
    ctx.lineTo(ox + 80, oy + 145+155-150);
    ctx.lineTo(ox + 89, oy + 165+155-150);

    ctx.stroke();

    ctx.fillStyle = '#1FFA14';
    ctx.fill();
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
    this.Terre(ctx, this.x, this.y)

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
    forms.push(new Terre(~~(Math.random() * 1150), 100, 10, 10, '', 'white', 1, false, ~~(Math.random() * 9)))
    // forms.push(new Mercure ())
    console.log('nb de smileys : ' + forms.length)

    // retourne un tableau d'objets de type Smiley
    return forms
  }

}
