import {
  Description,
  Link,
  Links,
  LinksRow,
  LinksValue,
  List,
  Name,
  Tile,
} from "./styled";

export const Repositories = ({ repositories }) => {
  // Проверяем, что repositories существует и является массивом
  if (!repositories || repositories.length === 0) {
    return <p>No repositories available.</p>; // Выводим сообщение, если репозиториев нет
  }

  return (
    <List>
      {repositories.map(({ id, name, description, homepage, html_url }) => (
        <Tile key={id}>
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Links>
            {!!homepage && (
              <LinksRow>
                <dt>Demo:</dt>
                <LinksValue>
                  <Link target="_blank" rel="noreferrer" href={homepage}>
                    {homepage}
                  </Link>
                </LinksValue>
              </LinksRow>
            )}
            <LinksRow>
              <dt>Code:</dt>
              <LinksValue>
                <Link target="_blank" rel="noreferrer" href={html_url}>
                  {html_url}
                </Link>
              </LinksValue>
            </LinksRow>
          </Links>
        </Tile>
      ))}
    </List>
  );
};
