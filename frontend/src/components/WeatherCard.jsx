//TODO Google MAP - weather app

import {
  Card,
  CardContent,
  Box,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import WbTwilightRoundedIcon from "@mui/icons-material/WbTwilightRounded";

import { useTheme } from '@mui/material/styles';
import { shades } from "./../theme";


const Forecast = () => {

    const stats = [
    {
      icon: <AirRoundedIcon fontSize="small" />,
      label: "Wind",
      value: "12 mph",
    },
    {
      icon: <OpacityRoundedIcon fontSize="small" />,
      label: "Humidity",
      value: "73%",
    },
    {
      icon: <WbTwilightRoundedIcon fontSize="small" />,
      label: "Sunrise",
      value: "6:36 AM",
    },
    {
      icon: <WbTwilightRoundedIcon fontSize="small" />,
      label: "Sunset",
      value: "7:43 PM",
    },
  ];

  const temp = 59
  const tempLow = 48
  const tempHigh = 62

    
    return (
         <Card
      sx={{
        maxWidth: 1400,
        mx: "auto",
        borderRadius: 4,
        bgcolor: "#062918", // Background Forest Color
        color: "#fff",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        {/* Header */}
        <Typography
          variant="h6"
          fontWeight={500}
          sx={{ mb: 4, opacity: 0.95 }}
        >
          ☁ Today's Weather
        </Typography>

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 3,
            mb: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <WbSunnyRoundedIcon
              sx={{
                fontSize: 60,
                color: "#F7C948",
                filter: "drop-shadow(0 0 12px rgba(247,201,72,0.4))",
              }}
            />

            <Box>
              <Typography variant="h3" fontWeight={700}>
                {temp}°F
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.65)" }}
              >
                Clear sky
              </Typography>
            </Box>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="h6"
              sx={{ color: "rgba(255,255,255,0.7)" }}
            >
              High: {tempHigh}° · Low: {tempLow}°
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "rgba(255,255,255,0.55)" }}
            >
              Overcast overall
            </Typography>
          </Box>
        </Box>

        {/* Stats */}
        <Grid container spacing={2}>
          {stats.map((item) => ( // map through data retrieved
            <Grid item xs={12} sm={6} md={3} key={item.label}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  borderRadius: 3,
                  p: 2,
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "rgba(255,255,255,0.6)",
                    mb: 1,
                  }}
                >
                  {item.icon}
                  <Typography variant="body2">
                    {item.label}
                  </Typography>
                </Box>

                <Typography variant="h6" fontWeight={600}>
                  {item.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
    )
}

//COMMENT: Stat
const Stat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="bg-muted/50 rounded-lg px-3 py-2">
    <div className="flex items-center gap-1.5 text-muted-foreground mb-1">
      {icon}
      <span className="text-xs">{label}</span>
    </div>
    <p className="text-sm font-medium text-foreground">{value}</p>
  </div>
);

export default Forecast;