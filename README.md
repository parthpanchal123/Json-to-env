
# convert-json-to-env 

Convert any json config file (Firebase config ,GCP config ...) from this :

```shell
{
    "key": "asjdalyih4357jdhakshdakhsdas",
    "secret": "dasd7453hkjoiurtoiurretour",
    "region": "Asia"
}
```

to this .env file 

```shell 
key=asjdalyih4357jdhakshdakhsdas
secret=dasd7453hkjoiurtoiurretour
region=Asia
```



## Installation

-  **Using npm** 

```shell
$ npm i -D convert-json-to-env
```
- **Using yarn** 

```shell
$ yarn add -D convert-json-to-env
```

## Usage

```shell
$ npx convert-json-to-env <file_name.json>
```

**Navigate to the directory which consists of your JSON File and execute the above npx command and .env file will be created in the same directory.**
