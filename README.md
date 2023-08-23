# DTO TS

This package provides Data Transfer Object functions. With this package, you can easily convert your data to DTO.

## Installation

- Using NPM

   ```shell
  npm install data-transfer-object-ts
   ```

## Usage

1. Import the components into your project
   ```js
   import NativeDTO from 'data-transfer-object-ts'
   ```
2. Use functions in your project
   ```js
    const data = {
      name: 'John',
      surname: 'Doe',
      age: 25,
      address: {
         city: 'New York',
         country: 'USA',
      },
    }
    const encodedData = NativeDTO.encode(data)
    console.log(encodedData)
    const decodedData = NativeDTO.decode(encodedData)
    console.log(decodedData)
   ```

## Type

| Option      | *Type*                        |
|-------------|-------------------------------|
| **payload** | *{ type: string, data?: any}* |

## API

| Option     | *Type*                           |
|------------|----------------------------------|
| **encode** | *( payload: payload ) => string* |
| **decode** | *( data: string) => payload*     |

## Contributing

All contributions are welcome.
If you would like to contribute to this project, feel free to submit pull requests.
Prior to making significant changes, I recommend opening an issue to discuss the changes.

## License

This project is licensed under the MIT license. For more information, refer to the `LICENSE` file.
