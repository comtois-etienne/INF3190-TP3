export class Session {
  public id: string;
  public nom: string;
  public description: string;
  public dateDebut: Date;
  public dateFin: Date;

  public constructor(
      id: string,
      nom: string,
      description: string,
      dateDebut: Date,
      dateFin: Date,
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
  }
  
}
