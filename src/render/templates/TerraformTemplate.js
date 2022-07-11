const TerraformTemplate = `{% for _block in terraformFile.blocks %}
{{ _block.blockType }} {% if _block.type != null %}"{{ _block.type }}" {% endif %}"{{ _block.name }}" {
{% for attribute in _block.attributes %}
    {% if attribute.type == 'map' %}
    {{ attribute.name }} {
        {% for attr in attribute.value %}
        {{ attr.name }} = {{ attr.value | dump }}
        {% endfor %}
    }
    {% else %}
    {{ attribute.name }} = {{ attribute.value | dump }}
    {% endif %}
{% endfor %}
}

{% endfor %}`;

export default TerraformTemplate;
