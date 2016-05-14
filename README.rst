pyramid-sphinx-themes
=====================

Pyramid Sphinx themes for Pyramid and projects that use Pyramid.

This project consists of parts that are not yet integrated. The layout and
design are developed using webpack. Somehow, yet to be determined, the design
is magically ported into a Sphinx theme. Finally to test that the theme renders
correctly, we run our sample documentation through Sphinx.

.. TODO:: Port design to Sphinx theme.

Requirements
------------

You will need the following for hacking on this project:

- `Python <https://www.python.org/downloads/>`_
- `Recommended Python packaging tools
  <https://packaging.python.org/en/latest/current/>`_
- `NodeJS with npm <http://nodejs.org/download/>`_


Installing
----------

Assuming you have all the recommended tools listed above installed:


1. Clone the project
++++++++++++++++++++

.. code-block:: bash

    $ git clone https://github.com/Pylons/pyramid-sphinx-themes.git
    $ cd pyramid-sphinx-themes


2. Create a virtual environment
+++++++++++++++++++++++++++++++

.. code-block:: bash

    $ export VENV=${PWD}
    $ python3 -m venv $VENV
    $ $VENV/bin/pip install --upgrade pip setuptools

3. Install requirements
+++++++++++++++++++++++

Install the project in editable mode:

.. code-block:: bash

    $ $VENV/bin/pip install -e .

4. Install frontend tools
+++++++++++++++++++++++++

.. code-block:: bash

    $ npm i

Working with frontend tools
---------------------------

For development mode, with hot reload and compilation of assets:

.. code-block:: bash

    $ npm run dev

View the local site in a browser at http://localhost:8080/

For a quick local build, not optimized:

.. code-block:: bash

    $ npm run build

Create a dist optimized for production:

.. code-block:: bash

    $ npm run dist


Building your docs
------------------

Make edits in your project ``docs/conf.py`` as follows:

1. Add the `pyramid_sphinx_themes` Sphinx extension module name
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code-block:: python

    # Add any Sphinx extension module names here, as strings. They can be
    # extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
    # ones.
    extensions = [
        'sphinx.ext.autodoc',
        'sphinx.ext.intersphinx',
        'sphinx.ext.viewcode',
        'pyramid_sphinx_themes'
        ]

2. Modify the section "Options for HTML output"
+++++++++++++++++++++++++++++++++++++++++++++++

.. code-block:: python

    # -- Options for HTML output ---------------------------------------------------

    from pyramid_sphinx_themes import get_html_themes_path

    # The theme to use for HTML and HTML Help pages.  See the documentation for
    # a list of builtin themes.
    html_theme = 'pyramid_sphinx_themes'

    # Theme options are theme-specific and customize the look and feel of a theme
    # further.  For a list of options available for each theme, see the
    # documentation.
    #html_theme_options = {}

    # Add any paths that contain custom themes here, relative to this directory.
    html_theme_path = get_html_themes_path()


3. Set (or wherever it gets set in the package)
+++++++++++++++++++++++++++++++++++++++++++++++

.. code-block:: Python

    html_use_smartypants = False

Save ``docs/conf.py``.


4. Run `sphinx-build`
+++++++++++++++++++++

While your current directory is ``docs/``, run the command:

.. code-block:: bash

    $ make clean html SPHINXBUILD=../bin/sphinx-build

