

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Servicio',
            fields=[
                ('id_servicio', models.IntegerField(primary_key=True, serialize=False, verbose_name='ID de servicio')),
                ('nombre_servicio', models.CharField(max_length=50, verbose_name='Nombre del Servicio')),
            ],
        ),
    ]
