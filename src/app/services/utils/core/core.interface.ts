import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from '../storage/local-storage/local-storage.service';
import { Meta, Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { DestroyRef } from '@angular/core';

/**
 * Can be used in a component constructor to access variates of frequently used values or perform global setting, configuration and more.
 */
export interface ICoreService {
  /**
   * Any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Document)
   */
  readonly document: Document;

  /**
   * @description
   * Angular router. Used for navigating from page to page and many other routing tasks.
   */
  readonly router: Router;

  /**
   * @description
   * Used for making api calls
   */
  readonly http: HttpClient;

  /**
   * Angular material dialog
   */
  readonly dialog: MatDialog;

  /**
   * @description
   * Used to work with local storage which safely access the local storage to avoid undefined error when rendered on server.
   */
  readonly localStorage: LocalStorageService;

  /**
   * A service for managing HTML `<meta>` tags.
   *
   * Properties of the `MetaDefinition` object match the attributes of the
   * HTML `<meta>` tag. These tags define document metadata that is important for
   * things like configuring a Content Security Policy, defining browser compatibility
   * and security settings, setting HTTP Headers, defining rich content for social sharing,
   * and Search Engine Optimization (SEO).
   *
   * To identify specific `<meta>` tags in a document, use an attribute selection
   * string in the format `"tag_attribute='value string'"`.
   * For example, an `attrSelector` value of `"name='description'"` matches a tag
   * whose `name` attribute has the value `"description"`.
   * Selectors are used with the `querySelector()` Document method,
   * in the format `meta[{attrSelector}]`.
   *
   * @see [HTML meta tag](https://developer.mozilla.org/docs/Web/HTML/Element/meta)
   * @see [Document.querySelector()](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
   *
   */
  readonly meta: Meta;
  /**
   * A service that can be used to get and set the title of a current HTML document.
   *
   * Since an Angular application can't be bootstrapped on the entire HTML document (`<html>` tag)
   * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
   * (representing the `<title>` tag). Instead, this service can be used to set and get the current
   * title value.
   * */
  readonly title: Title;

  /** Wether the bouncing loader is loading. */
  readonly showLoader$: BehaviorSubject<boolean>;

  /** A service for copying text to clipboard. */
  readonly clipBoard: Clipboard;
}
