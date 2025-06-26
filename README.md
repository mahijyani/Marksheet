# MJ MarkGen - Marksheet Generator Mobile App

[![Build Android APK](https://github.com/username/mjmarkgen-app/actions/workflows/build-apk.yml/badge.svg)](https://github.com/username/mjmarkgen-app/actions/workflows/build-apk.yml)

A mobile application version of the popular MJ MarkGen website (https://mjmarkgen.blogspot.com/) that allows users to generate marksheets for students. This app is built using Apache Cordova and can be compiled into an Android APK.

## 🌟 Features

- **Student Information Management**: Input student details including name, father's name, mother's name, date of birth, roll number, and class
- **Multi-Subject Support**: Enter marks for 5 subjects (Hindi, English, Math, Science, Social Science)
- **Dual Exam System**: Support for both half-yearly and annual examination marks
- **Automatic Calculations**: Real-time calculation of total marks, percentage, and grades
- **Professional Marksheet Generation**: Generate formatted marksheets with all student details
- **Print Functionality**: Built-in print support for generated marksheets
- **Mobile Optimized**: Responsive design optimized for mobile devices
- **Hindi Language Support**: Full support for Hindi language interface

## 📱 Screenshots

The app provides a clean, user-friendly interface for generating marksheets on mobile devices.

## 🚀 Quick Start

### Option 1: Download Pre-built APK

1. Go to the [Releases](https://github.com/username/mjmarkgen-app/releases) page
2. Download the latest `app-debug.apk` file
3. Enable "Unknown Sources" in your Android device settings
4. Install the APK file
5. Launch the MJ MarkGen app

### Option 2: Build from Source

#### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Android SDK (for building APK)
- Java JDK 8 or higher

#### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/username/mjmarkgen-app.git
   cd mjmarkgen-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Cordova CLI globally**
   ```bash
   npm install -g cordova
   ```

4. **Build the APK**
   ```bash
   ./build.sh
   ```
   
   Or manually:
   ```bash
   cordova platform add android
   cordova build android
   ```

5. **Find your APK**
   - Debug APK: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`
   - Release APK: `platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk`

## 🔧 Development

### Project Structure

```
mjmarkgen-app/
├── www/                    # Web assets
│   ├── index.html         # Main HTML file
│   ├── css/
│   │   └── index.css      # Styles
│   └── js/
│       └── index.js       # JavaScript functionality
├── res/                   # Resources
│   ├── icon/              # App icons
│   └── screen/            # Splash screens
├── .github/
│   └── workflows/
│       └── build-apk.yml  # GitHub Actions workflow
├── config.xml             # Cordova configuration
├── package.json           # Node.js dependencies
├── build.sh              # Local build script
└── README.md             # This file
```

### Local Development

1. **Start development server**
   ```bash
   cordova serve
   ```

2. **Test in browser**
   Open http://localhost:8000 in your browser

3. **Test on device**
   ```bash
   cordova run android
   ```

### Customization

#### Changing App Details
Edit `config.xml` to modify:
- App name and description
- Package ID
- Version number
- Author information

#### Modifying UI
- Edit `www/index.html` for structure
- Modify `www/css/index.css` for styling
- Update `www/js/index.js` for functionality

#### Adding Features
The app is built with vanilla JavaScript and can be easily extended with additional features.

## 🤖 Automated Building with GitHub Actions

This repository includes a GitHub Actions workflow that automatically builds the APK when code is pushed to the main branch.

### Workflow Features

- **Automatic Building**: Builds APK on every push to main branch
- **Multiple Outputs**: Generates both debug and release APKs
- **Artifact Storage**: Stores APK files as downloadable artifacts
- **Automatic Releases**: Creates GitHub releases with APK files
- **Cross-platform**: Runs on Ubuntu latest

### Triggering Builds

The workflow is triggered by:
- Push to main/master branch
- Pull requests to main/master branch
- Manual workflow dispatch

### Accessing Built APKs

1. **From Actions Tab**: Go to Actions → Select workflow run → Download artifacts
2. **From Releases**: Go to Releases page → Download from latest release

## 📋 Usage Instructions

### For End Users

1. **Install the App**
   - Download the APK file
   - Enable "Unknown Sources" in Android settings
   - Install the APK

2. **Generate a Marksheet**
   - Open the MJ MarkGen app
   - Fill in student details (name, father's name, mother's name, etc.)
   - Enter marks for each subject in both half-yearly and annual exams
   - Tap "मार्कशीट जनरेट करें" (Generate Marksheet)
   - Review the generated marksheet
   - Use "प्रिंट करें" (Print) to print the marksheet

### For Developers

1. **Fork the Repository**
2. **Clone Your Fork**
3. **Make Changes**
4. **Test Locally**
5. **Push Changes** (GitHub Actions will automatically build)
6. **Create Pull Request**

## 🛠️ Technical Details

### Technologies Used

- **Apache Cordova**: Cross-platform mobile development framework
- **HTML5/CSS3**: Modern web technologies for UI
- **JavaScript (ES6+)**: Application logic and functionality
- **GitHub Actions**: Automated CI/CD pipeline
- **Android SDK**: For building Android APKs

### Supported Platforms

- **Primary**: Android (API level 22+)
- **Potential**: iOS (with additional configuration)

### App Permissions

The app requires minimal permissions:
- Storage access (for saving generated marksheets)
- Print access (for printing functionality)

## 🔒 Security & Privacy

- **No Data Collection**: The app doesn't collect or transmit any personal data
- **Local Processing**: All marksheet generation happens locally on the device
- **No Internet Required**: The app works completely offline after installation

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Report Issues**: Use the GitHub Issues tab to report bugs
2. **Suggest Features**: Submit feature requests via Issues
3. **Submit Pull Requests**: Fork, modify, and submit PRs
4. **Improve Documentation**: Help us improve this README and other docs

### Development Guidelines

- Follow existing code style and structure
- Test your changes thoroughly
- Update documentation as needed
- Ensure the app works on different screen sizes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original website: [MJ MarkGen](https://mjmarkgen.blogspot.com/)
- Apache Cordova team for the excellent framework
- GitHub Actions for automated building
- Contributors and users of this project

## 📞 Support

If you encounter any issues or have questions:

1. **Check the Issues**: Look for existing solutions in GitHub Issues
2. **Create New Issue**: Submit a detailed bug report or question
3. **Community Support**: Help other users by answering their questions

## 🔄 Version History

- **v1.0.0**: Initial release with basic marksheet generation functionality
- **Future versions**: Will include additional features based on user feedback

---

**Made with ❤️ for the education community**

*This mobile app brings the popular MJ MarkGen website functionality to your Android device, making marksheet generation accessible anywhere, anytime.*

