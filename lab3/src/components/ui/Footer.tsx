import * as React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Link, Divider, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    // Thêm logic xử lý đăng ký nhận thông báo
    setEmail('');
  };

  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo và giới thiệu */}
          <Grid item xs={12} md={3}>
            <Typography variant="h4" component="div" sx={{ mb: 2 }}>
              <Box component="span" sx={{ color: '#3f51b5', fontWeight: 'bold' }}>Dream</Box>
              <Box component="span" sx={{ color: 'black', fontWeight: 'bold' }}>Job</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </Typography>
          </Grid>

          {/* About links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>About</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="none" color="text.secondary">Companies</Link>
              <Link href="#" underline="none" color="text.secondary">Pricing</Link>
              <Link href="#" underline="none" color="text.secondary">Terms</Link>
              <Link href="#" underline="none" color="text.secondary">Advice</Link>
              <Link href="#" underline="none" color="text.secondary">Privacy Policy</Link>
            </Box>
          </Grid>

          {/* Resources links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ mb: 2 }}>Resources</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" underline="none" color="text.secondary">Help Docs</Link>
              <Link href="#" underline="none" color="text.secondary">Guide</Link>
              <Link href="#" underline="none" color="text.secondary">Updates</Link>
              <Link href="#" underline="none" color="text.secondary">Contact Us</Link>
            </Box>
          </Grid>

          {/* Subscribe section */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ mb: 2 }}>Get job notifications</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              The latest job news, articles, sent to your inbox weekly.
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} sx={{ display: 'flex' }}>
              <TextField
                size="small"
                placeholder="Email Address"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '4px 0 0 4px',
                  }
                }}
              />
              <Button 
                type="submit" 
                variant="contained" 
                sx={{ 
                  bgcolor: '#3f51b5', 
                  borderRadius: '0 4px 4px 0',
                  '&:hover': {
                    bgcolor: '#303f9f'
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'flex-start' } }}>
          <Typography variant="body2" color="text.secondary">
            2021 © Dreamjob. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, mt: { xs: 2, md: 0 } }}>
            <IconButton aria-label="facebook" size="small" sx={{ color: '#3f51b5' }}>
              <FacebookIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="instagram" size="small" sx={{ color: '#3f51b5' }}>
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="reddit" size="small" sx={{ color: '#3f51b5' }}>
              <RedditIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="linkedin" size="small" sx={{ color: '#3f51b5' }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton aria-label="twitter" size="small" sx={{ color: '#3f51b5' }}>
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;