# google-calendar-day-picker

React day picker like the one used on google calendar event creation

![Screenshot](https://raw.githubusercontent.com/martinpastore/google-calendar-day-picker/master/images/screenshot.png)

## Installation

`npm install --save google-calendar-day-picker`

## Usage

```javascript
import DayPicker from 'google-calendar-day-picker';
```
...
```javascript
<DayPicker onChange={(value) => setDays(value)} ln={'es'} />
```

It will returns an array of days like ['M', 'T', 'S']

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D