#!/bin/bash

# MJ MarkGen APK Build Script
# This script builds the Android APK locally

echo "🚀 Starting MJ MarkGen APK Build Process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install Cordova globally if not already installed
if ! command -v cordova &> /dev/null; then
    echo "📦 Installing Cordova CLI..."
    npm install -g cordova
fi

# Install project dependencies
echo "📦 Installing project dependencies..."
npm install

# Add Android platform if not already added
echo "🤖 Adding Android platform..."
cordova platform add android

# Build the APK
echo "🔨 Building Android APK..."
cordova build android

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "📱 APK files created:"
    echo "  Debug APK: platforms/android/app/build/outputs/apk/debug/app-debug.apk"
    echo "  Release APK: platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk"
    echo ""
    echo "📋 To install on your device:"
    echo "  1. Enable 'Unknown Sources' in Android Settings"
    echo "  2. Transfer the APK file to your device"
    echo "  3. Install the APK file"
    echo ""
    echo "🎉 Happy testing!"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

