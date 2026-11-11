import test from "node:test";
import assert from "node:assert/strict";
import {
  getMailtoUrl,
  getSafeExternalUrl,
  getWhatsAppUrl,
} from "../src/utils/links.js";

test("accepts only absolute HTTP and HTTPS URLs", () => {
  assert.equal(getSafeExternalUrl("https://example.org/path"), "https://example.org/path");
  assert.equal(getSafeExternalUrl("http://example.org"), "http://example.org/");
  assert.equal(getSafeExternalUrl("javascript:alert(1)"), "");
  assert.equal(getSafeExternalUrl("not a URL"), "");
  assert.equal(getSafeExternalUrl(""), "");
});

test("creates a WhatsApp URL only for a plausible international number", () => {
  assert.equal(getWhatsAppUrl("+54 9 11 1234-5678"), "https://wa.me/5491112345678");
  assert.equal(getWhatsAppUrl("0000000000"), "");
  assert.equal(getWhatsAppUrl("123"), "");
  assert.equal(getWhatsAppUrl(""), "");
});

test("creates mailto links only for valid non-example email addresses", () => {
  assert.equal(getMailtoUrl("hello@studio.org"), "mailto:hello@studio.org");
  assert.equal(getMailtoUrl("hello@example.com"), "");
  assert.equal(getMailtoUrl("invalid-email"), "");
  assert.equal(getMailtoUrl(""), "");
});
