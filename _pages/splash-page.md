---
title: 'Street Side Software'
layout: splash
# classes:
#     - landing
#     - dark-theme
permalink: /
header:
    overlay_color: '#000'
    overlay_filter: '0.5'
    # overlay_image: /assets/images/late-afternoon.jpg
    overlay_image: /assets/images/sunrise.jpg
    # actions:
    #     - label: 'Download'
    #       url: '#test-link'
excerpt: 'Making life easier for software developers around the world.'
intro:
    - excerpt: Creating Open Source Software used by 100,000's of software professionals!
feature_row:
    - image_path: assets/images/stairs.jpg
      title: 'CSpell'
      excerpt: 'A command line spell checker for code. Perfect for your CI/CD pipeline.'
      url: '#test-link'
      btn_label: 'Read More'
      btn_class: 'btn--primary'
    - image_path: assets/images/cafe.jpg
      title: 'VS Code Spell Checker'
      excerpt: 'A popular extension that improves productivity by spell checking as you type.'
      url: '#test-link'
      btn_label: 'Read More'
      btn_class: 'btn--primary'
    # - image_path: assets/images/escalator.jpg
    #   title: 'Placeholder 3'
    #   excerpt: 'This is some sample content that goes here with **Markdown** formatting.'
    #   url: '#test-link'
    #   btn_label: 'Read More'
    #   btn_class: 'btn--primary'
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}
