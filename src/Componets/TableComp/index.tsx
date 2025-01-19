import {
  TableContainer,
  TableHeader,
  TableCell,
  Row,
  TableBody,
} from "./skins";

interface TableCon {
  projects: any;
}

const Table = (props: TableCon) => {
  const { projects } = props;
  const currencyMap: any = {
    usd: "$",
    eur: "€",
    gbp: "£",
    aud: "A$",
    cad: "C$",
    chf: "CHF",
    dkk: "DKK",
  };

  return (
    <TableContainer>
      <TableHeader>
        <TableCell>S. No.</TableCell>
        <TableCell>Percentage Funded</TableCell>
        <TableCell>Amount Pledged</TableCell>
      </TableHeader>

      <TableBody>
        {projects.map((project: any) => {
          let currency = project["currency"];
          return (
            <Row key={project["s.no"]}>
              <TableCell>{project["s.no"]}</TableCell>

              <TableCell>
                {project["percentage.funded"]
                  ? `${project["percentage.funded"]}%`
                  : "N/A"}
              </TableCell>

              <TableCell>
                {currency && project["amt.pledged"]
                  ? currencyMap[currency.toLowerCase()]
                    ? `${currencyMap[currency.toLowerCase()]} 
                       ${project["amt.pledged"].toLocaleString()}`
                    : `${currency.toUpperCase()} 
                       ${project["amt.pledged"].toLocaleString()}`
                  : "N/A"}
              </TableCell>
            </Row>
          );
        })}
      </TableBody>
    </TableContainer>
  );
};

export default Table;
