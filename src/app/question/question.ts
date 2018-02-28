export class Question {
  constructor(
    public id: number,
    public categoryId: number,
    public question: string,
    public answer?: string
  ) {}
}
