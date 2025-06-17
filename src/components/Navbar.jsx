import { Stack, Box } from "@mui/material";
import bkinclogo from "../assets/bkinclogo.png";

const YTSVGLogo = () => (
  <svg width="45" height="45" viewBox="0 0 70 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M35 2C53.2254 2 68 15.4315 68 32C68 48.5685 53.2254 62 35 62C16.7746 62 2 48.5685 2 32C2 15.4315 16.7746 2 35 2Z" fill="#FF0000"/>
      <polygon points="28,20 50,34 28,48" fill="#fff"/>
      <text x="23" y="38" font-size="16" fill="#ffffff" opacity="0.2" font-family="Arial, Helvetica, sans-serif">YT</text>
    </g>
  </svg>
);

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between", height: 80 }}>
    {/* Left: SVG Logo */}
    <Link to="/" style={{ display: "flex", alignItems: "center", flex: 1 }}>
      <YTSVGLogo />
    </Link>
    {/* Center: BK Inc Logo */}
    <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <img src={bkinclogo} alt="BK Inc Logo" style={{ height: '110%', maxWidth: '110%', objectFit: 'contain' }} />
    </Box>
    {/* Right: SearchBar */}
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <SearchBar />
    </Box>
  </Stack>
);

export default Navbar;