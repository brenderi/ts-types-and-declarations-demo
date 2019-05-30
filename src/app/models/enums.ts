export function getEnums() {

  enum Graph {
    Donut,
    Pie,
    Bar,
    Column
  }
  enum OOTOutputType {
    ERTD = 3,
    ExtendedERTD = 4,
    MDP = 21,
  }
  enum Format {
    XML = 'Extensible Markup Language',
    RSS = 'Really Simple Syndication',
    JSON = 'JavaScript Object Notation',
    CSV = 'Comma-Separated Values '
  }

  return [
    Graph.Bar,
    OOTOutputType.MDP,
    Format.JSON,
  ];

}