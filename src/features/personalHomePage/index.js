import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainInforamation} from "./MainInformation";
import { Skills } from "./Skills";
import { Container, Icon } from "./styled";
import toolsIcon from "./toolsIcon.svg";
import rookIcon from "./rookIcon.svg";
import { nextSkills, skills } from "./skillData";


export const PersonalHomePage = () => (
  <Container>
    <ThemeSwitch />
    <MainInforamation />

    <main>
      <Skills
        title={
          <>
            My skillset includes <Icon src={toolsIcon} alt="" />
          </>
        }
        skills={skills}
      />
      <Skills
        title={
          <>
            What i want to lear next <Icon src={rookIcon} alt="" />
          </>
        }
        skills={nextSkills}
      />
    </main>
  </Container>
);
