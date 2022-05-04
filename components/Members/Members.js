import Image from "next/image";
import Member from "../Member/Member";

import { MembersMain, Title, BoxMembers, Box } from "../Members/Members.styled";

export default function Members(props) {
  return (
    <MembersMain>
      <Title>
        <h4>{props.title}</h4>
      </Title>
      <BoxMembers>
        <Member
          image={"/kurt.jpeg"}
          imageAlt={"Foto do membro da empresa"}
          imageWidth={325}
          imageHeight={350}
          name={"Kurt Cobain"}
          role={"Vocalista do Nirvana e UX/UI"}
        />
        <Member
          image={"/amy.jpeg"}
          imageAlt={"Foto do membro da empresa"}
          imageWidth={325}
          imageHeight={350}
          name={"Amy Winehouse"}
          role={"Cantora e Social Midia"}
        />
        <Member
          image={"/bob.jpeg"}
          imageAlt={"Foto do membro da empresa"}
          imageWidth={325}
          imageHeight={350}
          name={"Bob Marley"}
          role={"Rei do reggae e Rh"}
        />
        <Member
          image={"/janis.jpeg"}
          imageAlt={"Foto do membro da empresa"}
          imageWidth={325}
          imageHeight={350}
          name={"Janis Joplin"}
          role={"Cantora e Marketing"}
        />

        <Member
          image={"/jimmy.jpeg"}
          imageAlt={"Foto do membro da empresa"}
          imageWidth={325}
          imageHeight={350}
          name={"Jimmy Hendrix"}
          role={"Guitarstar e Full Stack Developer"}
        />
      </BoxMembers>
    </MembersMain>
  );
}
