import { useDispatch, useSelector } from "react-redux";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../../personalHomePageSlice";
import { useEffect } from "react";
import { githubUserName } from "./githubUserName";
import { Header, MyRecentProject, Section, StyledGithubIcon } from "./styled";
import { SubHeader } from "../SubHeader";
import { Content } from "./Content";

export const Portfolio = () => {
  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUserName));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGithubIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProject>My recent project</MyRecentProject>
      </Header>

      <Content status={repositoriesStatus} repositories={repositories} />
    </Section>
  );
};
