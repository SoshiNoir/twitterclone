import React from 'react';
import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  Followage,
  LocationIcon,
  ProfileData,
} from './styles';

// import { Container } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar Perfil</EditButton> */}
        <h1>Miguel Matias</h1>
        <h2>@SoshiNoir</h2>
        <p>Web Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Franca, São Paulo
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de Março de 2000
          </li>
        </ul>

        <Followage>
          <span>
            <strong>385</strong> Seguindo
          </span>
          <span>
            <strong>421 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
