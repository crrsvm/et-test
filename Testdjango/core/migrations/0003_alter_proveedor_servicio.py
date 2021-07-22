

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_servicio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proveedor',
            name='servicio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='core.servicio'),
        ),
    ]
