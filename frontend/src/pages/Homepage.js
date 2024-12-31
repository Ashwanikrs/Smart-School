import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { RedButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <StyledImageContainer>
                        <img src={Students} alt="students" />
                    </StyledImageContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledContent>
                        <StyledTitle>
                            Welcome to
                            <br />
                            Smart School
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <RedButton variant="contained" fullWidth>
                                    Login
                                </RedButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "#550080", fontWeight: 'bold' }}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledContent>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f9f9f9, #e3e3ff);
  padding: 20px;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
`;

const StyledText = styled.p`
  color: #555;
  margin: 16px 0;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;
