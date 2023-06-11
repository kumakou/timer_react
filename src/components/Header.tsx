import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import TimerIcon from "@mui/icons-material/Timer"
import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TimerIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Timer APP
          </Typography>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography textAlign="center" variant="h6" sx={{ pr: "10px" }}>
              <NavLink
                to="/"
                style={{ color: "white", textDecoration: "none" }}
              >
                TIMER
              </NavLink>
            </Typography>
            <Typography textAlign="center" variant="h6">
              <NavLink
                to="stopwatch"
                style={{ color: "white", textDecoration: "none" }}
              >
                STOPWATCH
              </NavLink>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
