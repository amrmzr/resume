@echo off
echo Ammar Mazhar Portfolio - Setup Script
echo ====================================
echo.

echo Checking for Node.js installation...
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo Node.js is not installed or not in your PATH.
  echo To run the portfolio with a server, please install Node.js from https://nodejs.org/
  echo.
  echo You can still open the portfolio by double-clicking the index.html file.
  echo.
  echo Press any key to open the portfolio in your default browser...
  pause >nul
  start "" "index.html"
  exit /b
)

echo Node.js is installed. Setting up server...
echo.
echo Starting the portfolio on http://localhost:3000
echo Press Ctrl+C to stop the server when done
echo.

node server.js
