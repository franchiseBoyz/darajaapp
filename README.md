### Prerequisites

woooApp project built on djangorestframework that uses MPESAAPI as a means of payment for customers who purchase items on the app.

### Installing

For successful run of the project run:

```
git clone https://github.com/3HeadedSnake/darajaapp.git
```

then create a virtual envirenment folder with:

```
python -m virtualenv env

```
while still in the parent directory run:
for Windows
```
env\Scripts\activate.bat
```
and for Linux Systems
```
source env/bin/activate
```
Install the project requirements with:
```
pip install - r requirements.txt
```

For smooth running, update the navigate to ```darajaapi/mpesa_core/keys.py``` and update with your mpesa credentials.

Also navigate to ```darajaapi/aws/conf.py``` and add your ```AWS_ACCESS_KEY_ID,AWS_SECRET_ACCESS_KEY}``` For this you must have an aws account. This will be used for storing your static files.

## Built With

* [DjangoRestFramework](https://www.django-rest-framework.org/) - The web framework used
* [MPESAAPI](https://developer.safaricom.co.ke/apis-explorer) - Payment Management

## Authors

* **Troye Gilbert** - *Initial work* - [3HeadedSnake](https://github.com/3HeadedSnake)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


