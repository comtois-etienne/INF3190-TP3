export class TypeActivite {
  public id: string;
  public nom: string;
  public description: string;

  public constructor(
      id: string,
      nom: string, 
      description: string
  ) {
    this.id = id;
    this.nom = nom;
    this.description = description;
  }
  
}
